deckCode = ""
sourceIndex = {}
scanStats = {}
cloneQueue = {}
cloneQueueIndex = 1
ejectQueue = {}
ejectQueueIndex = 1

relativeLayout = {
  rotationY = 180,
  backOffset = {3.0, 0.0, -1.5},
  frontOffset = {5.9, 0.0, -1.5},
  egoOffset = {3.0, 0.0, 1.95},
  backSupportOffset = {8.8, 0.0, -1.5},
  frontSupportOffset = {8.8, 0.0, 1.95},
  backDirectiveOffset = {8.8, 0.0, -4.95},
  frontDirectiveOffset = {8.8, 0.0, 5.4},
  sharedExtraOffset = {3.0, 0.0, 12.3},
  mainOffset = {3.0, 0.0, 5.4},
  extraOffset = {3.0, 0.0, 12.3},
  singleCardOffset = {3.0, 0.0, 5.4},
  noCodeOffset = {3.0, 0.0, -5.0},
  dupCodeOffset = {3.0, 0.0, -11.9},
  cardStepX = 2.45,
  rowStepZ = 3.45,
  supportStepX = 2.45,
  cardStackY = 0.04,
  deckStackY = 0.08
}

function onLoad()
  if self ~= nil and type(self.clearButtons) == "function" then
    self.clearButtons()
  end
  if self ~= nil and type(self.clearInputs) == "function" then
    self.clearInputs()
  end

  makeButton("덱 불러오기", "buttonImport", 1.0)
  makeButton("카드찾기", "buttonCard", -1.0)
  makeDeckInput()
  print("LT importer user loaded.")
end

function makeButton(label, clickFunction, x)
  if self == nil or type(self.createButton) ~= "function" then
    print("Button unavailable.")
    return
  end

  self.createButton({
    label = label,
    click_function = clickFunction,
    function_owner = self,
    position = {x, 1.4, 2.0},
    rotation = {0, 180, 0},
    width = 950,
    height = 300,
    font_size = 125
  })
end

function makeDeckInput()
  if self == nil or type(self.createInput) ~= "function" then
    print("Input unavailable.")
    return
  end

  self.createInput({
    input_function = "setDeckCode",
    function_owner = self,
    label = "DECK CODE",
    value = deckCode,
    position = {0, 1.4, 3.3},
    rotation = {0, 180, 0},
    width = 2450,
    height = 320,
    font_size = 135,
    validation = 1
  })
end

function setDeckCode(object, playerColor, value, selected)
  deckCode = tostring(value or "")
end

function buttonScan()
  rebuildIndex()
end

function buttonNoCode()
  ejectNoCodeItems()
end

function buttonDupCode()
  ejectDuplicateCodeItems()
end

function buttonImport()
  importDeck(readDeckCode(), relativeLayout)
end

function buttonCard()
  spawnSingleCard(readDescription(self), relativeLayout)
end

function spawnSingleCard(codeText, layout)
  local code = normalize(codeText)
  if code == "" then
    print("Enter a card code.")
    return
  end

  rebuildIndex()
  if sourceIndex[code] == nil then
    print("Missing source card: " .. code)
    return
  end

  layout = layout or relativeLayout
  local base = getOriginPosition()
  local yaw = getOriginYaw()
  local position = offsetPosition(base, layout.singleCardOffset, yaw)
  cloneOne(code, position, getCardYaw(yaw), function()
    print("LT single card complete: " .. code)
  end)
end

function readDeckCode()
  return deckCode
end

function importDeck(codeText, layout)
  rebuildIndex()
  layout = layout or relativeLayout
  local base = getOriginPosition()
  local yaw = getOriginYaw()
  local cardYaw = getCardYaw(yaw)

  local deck = parseDeck(codeText)
  sortCodes(deck.main)
  limitList(deck.ego, 1, "EGO")
  local support = splitOwnedSupport(deck)
  local directives = getDirectiveDecks(deck)
  local missing = {}
  addMissing(missing, deck.front)
  addMissing(missing, deck.back)
  addMissingList(missing, deck.ego)
  addMissingList(missing, deck.upgrade)
  addMissingList(missing, deck.main)
  addMissingList(missing, deck.extra)
  addMissingDirectiveDecks(missing, directives)

  if #missing > 0 then
    print("Missing source cards: " .. table.concat(missing, ", "))
    return
  end

  local queue = {}

  if deck.front ~= nil and deck.front ~= "" then
    table.insert(queue, makeCloneItem(deck.front, offsetPosition(base, layout.frontOffset, yaw), cardYaw))
  end
  if deck.back ~= nil and deck.back ~= "" then
    table.insert(queue, makeCloneItem(deck.back, offsetPosition(base, layout.backOffset, yaw), cardYaw))
  end

  for i, code in ipairs(deck.ego) do
    table.insert(queue, makeCloneItem(code, stepPosition(offsetPosition(base, layout.egoOffset, yaw), i, layout.supportStepX, 0, layout.cardStackY, yaw), cardYaw))
  end
  addSupportCloneItems(queue, support.back, offsetPosition(base, layout.backSupportOffset, yaw), layout, yaw, cardYaw)
  addSupportCloneItems(queue, support.front, offsetPosition(base, layout.frontSupportOffset, yaw), layout, yaw, cardYaw)
  addDirectiveCloneItems(queue, directives.back, offsetPosition(base, layout.backDirectiveOffset, yaw), layout, yaw, cardYaw)
  addDirectiveCloneItems(queue, directives.front, offsetPosition(base, layout.frontDirectiveOffset, yaw), layout, yaw, cardYaw)
  addSupportCloneItems(queue, support.sharedUpgrade, getUpgradeStart(base, yaw, layout, #deck.ego), layout, yaw, cardYaw)
  for i, code in ipairs(deck.main) do
    local col = (i - 1) % 10
    local row = math.floor((i - 1) / 10)
    table.insert(queue, makeCloneItem(code, gridPosition(offsetPosition(base, layout.mainOffset, yaw), col, row, i, layout, yaw), cardYaw))
  end
  for i, code in ipairs(support.sharedExtra) do
    local col = (i - 1) % 10
    local row = math.floor((i - 1) / 10)
    table.insert(queue, makeCloneItem(code, gridPosition(offsetPosition(base, layout.sharedExtraOffset, yaw), col, row, i, layout, yaw), cardYaw))
  end

  startCloneQueue(queue)
end

function addSupportCloneItems(queue, codes, start, layout, yaw, cardYaw)
  for i, code in ipairs(codes or {}) do
    table.insert(queue, makeCloneItem(code, stepPosition(start, i, layout.supportStepX, 0, layout.cardStackY, yaw), cardYaw))
  end
end

function addDirectiveCloneItems(queue, directiveDecks, start, layout, yaw, cardYaw)
  for deckIndex, codes in ipairs(directiveDecks or {}) do
    local deckStart = stepPosition(start, deckIndex, layout.supportStepX, 0, 0, yaw)
    for cardIndex, code in ipairs(codes) do
      table.insert(queue, makeCloneItem(code, {
        deckStart[1],
        deckStart[2] + (cardIndex * layout.deckStackY),
        deckStart[3]
      }, cardYaw))
    end
  end
end

function getDirectiveDecks(deck)
  local directives = {front = {}, back = {}}
  if normalize(deck.front) == "2-I-4" then
    directives.front = makeFaustDirectiveDecks()
  end
  if normalize(deck.back) == "2-I-4" then
    directives.back = makeFaustDirectiveDecks()
  end
  return directives
end

function makeFaustDirectiveDecks()
  return {
    makeCodeRange("D-1", 4),
    makeCodeRange("D-2", 4),
    makeCodeRange("D-3", 4),
    makeCodeRange("D-4", 5)
  }
end

function makeCodeRange(prefix, count)
  local codes = {}
  for i = 1, count do
    table.insert(codes, prefix .. "-" .. tostring(i))
  end
  return codes
end

function addMissingDirectiveDecks(missing, directives)
  for _, deckList in ipairs({directives.front, directives.back}) do
    for _, codes in ipairs(deckList or {}) do
      addMissingList(missing, codes)
    end
  end
end

function splitOwnedSupport(deck)
  local support = {front = {}, back = {}, sharedUpgrade = {}, sharedExtra = {}}
  local frontOwner = getIdentityOwner(deck.front)
  local backOwner = getIdentityOwner(deck.back)

  splitOwnedList(deck.upgrade, support, frontOwner, backOwner, "sharedUpgrade")
  splitOwnedList(deck.extra, support, frontOwner, backOwner, "sharedExtra")
  sortCodes(support.front)
  sortCodes(support.back)
  sortCodes(support.sharedUpgrade)
  sortCodes(support.sharedExtra)
  return support
end

function limitList(list, maxCount, label)
  if list == nil or #list <= maxCount then
    return
  end

  while #list > maxCount do
    table.remove(list)
  end
  print(tostring(label or "List") .. " limited to " .. tostring(maxCount) .. ".")
end

function splitOwnedList(codes, support, frontOwner, backOwner, sharedKey)
  for _, code in ipairs(codes or {}) do
    local owner = getIdentitySupportOwner(code)
    if owner ~= nil and frontOwner ~= nil and owner == frontOwner then
      table.insert(support.front, code)
    elseif owner ~= nil and backOwner ~= nil and owner == backOwner then
      table.insert(support.back, code)
    else
      table.insert(support[sharedKey], code)
    end
  end
end

function getIdentityOwner(code)
  local sinner, number = normalize(code):match("^(%d+)%-I%-(%d+)$")
  if sinner == nil then
    return nil
  end
  return sinner .. "-" .. number
end

function getIdentitySupportOwner(code)
  local sinner, number = normalize(code):match("^(%d+)%-[UX]%-(%d+)%-")
  if sinner == nil then
    return nil
  end
  return sinner .. "-" .. number
end

function getUpgradeStart(base, yaw, layout, egoCount)
  local usedEgoSlots = math.max(1, tonumber(egoCount or 0) or 0)
  local offset = {
    layout.egoOffset[1] + (usedEgoSlots * layout.supportStepX) + 0.65,
    layout.egoOffset[2],
    layout.egoOffset[3]
  }
  return offsetPosition(base, offset, yaw)
end

function getOriginPosition()
  if self ~= nil and type(self.getPosition) == "function" then
    local ok, position = pcall(function()
      return self.getPosition()
    end)
    if ok and position ~= nil then
      return {position.x, position.y, position.z}
    end
  end
  return {0, 0, 0}
end

function getOriginYaw()
  if self ~= nil and type(self.getRotation) == "function" then
    local ok, rotation = pcall(function()
      return self.getRotation()
    end)
    if ok and rotation ~= nil then
      return rotation.y or rotation[2] or relativeLayout.rotationY
    end
  end
  return relativeLayout.rotationY
end

function getCardYaw(originYaw)
  return normalizeAngle((originYaw or 0) + 180)
end

function normalizeAngle(angle)
  local value = angle or 0
  while value >= 360 do
    value = value - 360
  end
  while value < 0 do
    value = value + 360
  end
  return value
end

function offsetPosition(base, offset, yaw)
  local radians = math.rad(yaw or 0)
  local cosYaw = math.cos(radians)
  local sinYaw = math.sin(radians)
  local rotatedX = (offset[1] * cosYaw) - (offset[3] * sinYaw)
  local rotatedZ = (offset[1] * sinYaw) + (offset[3] * cosYaw)

  return {
    base[1] + rotatedX,
    base[2] + offset[2],
    base[3] + rotatedZ
  }
end

function stepPosition(start, index, stepX, stepZ, stackY, yaw)
  local step = offsetPosition({0, 0, 0}, {((index - 1) * stepX), 0, ((index - 1) * stepZ)}, yaw)
  return {
    start[1] + step[1],
    start[2] + (index * stackY),
    start[3] + step[3]
  }
end

function gridPosition(start, col, row, index, layout, yaw)
  local step = offsetPosition({0, 0, 0}, {(col * layout.cardStepX), 0, (row * layout.rowStepZ)}, yaw)
  return {
    start[1] + step[1],
    start[2] + (index * layout.cardStackY),
    start[3] + step[3]
  }
end

function makeCloneItem(code, position, rotationY)
  return {
    code = code,
    position = position,
    rotationY = rotationY or 180
  }
end

function rebuildIndex()
  sourceIndex = {}
  scanStats = {total = 0, indexed = 0, missing = {}, missingItems = {}, duplicate = {}, duplicateItems = {}}

  local zone = getSourceZone()
  if zone == nil or type(zone.getObjects) ~= "function" then
    print("Source zone not found.")
    return
  end

  if isContainer(zone) then
    indexContainer(zone)
    printSourceIndexCount()
    return
  end

  local ok, objects = pcall(function()
    return zone.getObjects()
  end)

  if not ok or objects == nil then
    print("Source zone read failed.")
    return
  end

  for _, object in ipairs(objects) do
    indexObject(object)
  end

  printSourceIndexCount()
end

function printSourceIndexCount()
  local count = 0
  for _ in pairs(sourceIndex) do
    count = count + 1
  end

  local total = scanStats.total or count
  local missingCount = #(scanStats.missing or {})
  local duplicateCount = #(scanStats.duplicate or {})
  print("LT source index: " .. count .. " / total: " .. total .. " / no code: " .. missingCount .. " / duplicate: " .. duplicateCount)
  printScanList("No code", scanStats.missing)
  printScanList("Duplicate code", scanStats.duplicate)
end

function ejectDuplicateCodeItems()
  rebuildIndex()

  if scanStats.duplicateItems == nil or #scanStats.duplicateItems == 0 then
    print("Duplicate code cards not found.")
    return
  end

  ejectItems(scanStats.duplicateItems, relativeLayout.dupCodeOffset, "Duplicate code cards ejected: ")
end

function ejectNoCodeItems()
  rebuildIndex()

  if scanStats.missingItems == nil or #scanStats.missingItems == 0 then
    print("No code cards not found.")
    return
  end

  ejectItems(scanStats.missingItems, relativeLayout.noCodeOffset, "No code cards ejected: ")
end

function ejectItems(items, offset, completeMessage)
  local yaw = getOriginYaw()
  local base = offsetPosition(getOriginPosition(), offset, yaw)
  ejectQueue = {}
  for i, item in ipairs(items) do
    local col = (i - 1) % 10
    local row = math.floor((i - 1) / 10)
    table.insert(ejectQueue, {
      container = item.container,
      guid = item.guid,
      position = gridPosition(base, col, row, i, relativeLayout, yaw)
    })
  end

  ejectQueueIndex = 1
  ejectCompleteMessage = completeMessage or "Cards ejected: "
  processEjectQueue()
end

function processEjectQueue()
  local item = ejectQueue[ejectQueueIndex]
  if item == nil then
    print(tostring(ejectCompleteMessage or "Cards ejected: ") .. tostring(ejectQueueIndex - 1))
    return
  end

  ejectQueueIndex = ejectQueueIndex + 1
  ejectOne(item, processEjectQueue)
end

function ejectOne(item, done)
  if item == nil or item.container == nil or item.guid == nil then
    finishClone(done)
    return
  end

  if type(item.container.takeObject) ~= "function" then
    finishClone(done)
    return
  end

  local ok = pcall(function()
    item.container.takeObject({
      guid = item.guid,
      position = item.position,
      smooth = false,
      callback_function = function(object)
        if object ~= nil and type(object.setRotation) == "function" then
          object.setRotation({0, getCardYaw(getOriginYaw()), 0})
        end
        finishClone(done)
      end
    })
  end)

  if not ok then
    print("Card eject failed: " .. tostring(item.guid))
    finishClone(done)
  end
end

function printScanList(title, list)
  if list == nil or #list == 0 then
    return
  end

  print(title .. "_BEGIN")
  for i, value in ipairs(list) do
    print(tostring(i) .. " | " .. value)
  end
  print(title .. "_END")
end

function indexObject(object)
  if object == nil or object == self then
    return
  end

  if isContainer(object) then
    indexContainer(object)
    return
  end

  local code = findObjectCode(object)
  if code ~= nil then
    sourceIndex[code] = {object = object}
  end
end

function indexContainer(container)
  if container == nil or type(container.getObjects) ~= "function" then
    return
  end

  local ok, items = pcall(function()
    return container.getObjects()
  end)

  if not ok or items == nil then
    return
  end

  local firstItems = {}
  local addedDuplicateFirst = {}

  for _, item in ipairs(items) do
    scanStats.total = (scanStats.total or 0) + 1
    local code = findItemCode(item)
    if code ~= nil and item.guid ~= nil then
      if sourceIndex[code] ~= nil then
        table.insert(scanStats.duplicate, code .. " / " .. describeItem(item))
        if addedDuplicateFirst[code] ~= true and firstItems[code] ~= nil then
          table.insert(scanStats.duplicateItems, firstItems[code])
          addedDuplicateFirst[code] = true
        end
        table.insert(scanStats.duplicateItems, {container = container, guid = item.guid})
      else
        firstItems[code] = {container = container, guid = item.guid}
      end
      sourceIndex[code] = {container = container, guid = item.guid}
      scanStats.indexed = (scanStats.indexed or 0) + 1
    else
      table.insert(scanStats.missing, describeItem(item))
      if item.guid ~= nil then
        table.insert(scanStats.missingItems, {container = container, guid = item.guid})
      end
    end
  end
end

function describeItem(item)
  if item == nil then
    return "unknown item"
  end

  local name = tostring(item.name or item.nickname or "")
  local nickname = tostring(item.nickname or "")
  local description = tostring(item.description or "")
  local memo = tostring(item.gm_notes or item.memo or "")
  local guid = tostring(item.guid or "no-guid")

  return "guid=" .. guid ..
    " / name=" .. trimForPrint(name) ..
    " / nickname=" .. trimForPrint(nickname) ..
    " / desc=" .. trimForPrint(description) ..
    " / note=" .. trimForPrint(memo)
end

function firstText(a, b, c, fallback)
  if a ~= nil and tostring(a) ~= "" then
    return tostring(a)
  end
  if b ~= nil and tostring(b) ~= "" then
    return tostring(b)
  end
  if c ~= nil and tostring(c) ~= "" then
    return tostring(c)
  end
  return fallback
end

function trimForPrint(text)
  local value = tostring(text or "")
  value = value:gsub("\n", " ")
  value = value:gsub("\r", " ")
  if #value > 80 then
    return value:sub(1, 80) .. "..."
  end
  return value
end

function startCloneQueue(queue)
  cloneQueue = queue or {}
  cloneQueueIndex = 1
  processCloneQueue()
end

function processCloneQueue()
  local item = cloneQueue[cloneQueueIndex]
  if item == nil then
    print("LT clone queue complete: " .. tostring(cloneQueueIndex - 1))
    return
  end

  cloneQueueIndex = cloneQueueIndex + 1
  cloneOne(item.code, item.position, item.rotationY, processCloneQueue)
end

function finishClone(done)
  if type(done) ~= "function" then
    return
  end

  if type(Wait) == "table" and type(Wait.time) == "function" then
    Wait.time(function()
      done()
    end, 0.15)
  else
    done()
  end
end

function cloneOne(code, position, rotationY, done)
  local entry = sourceIndex[normalize(code)]
  if entry == nil then
    print("Missing source: " .. tostring(code))
    finishClone(done)
    return
  end

  if entry.object ~= nil and type(entry.object.clone) == "function" then
    local ok, clone = pcall(function()
      return entry.object.clone({position = position, snap_to_grid = false})
    end)
    if ok and clone ~= nil then
      setupClone(clone, code, rotationY)
    else
      print("Clone failed: " .. tostring(code))
    end
    finishClone(done)
    return
  end

  if entry.container ~= nil and type(entry.container.takeObject) == "function" then
    local ok = pcall(function()
      entry.container.takeObject({
        guid = entry.guid,
        position = {position[1], position[2] + 2, position[3]},
        smooth = false,
        callback_function = function(original)
          if original == nil then
            print("Take failed: " .. tostring(code))
            finishClone(done)
            return
          end

          if type(original.clone) == "function" then
            local cloneOk, clone = pcall(function()
              return original.clone({position = position, snap_to_grid = false})
            end)
            if cloneOk and clone ~= nil then
              setupClone(clone, code, rotationY)
            else
              print("Clone failed: " .. tostring(code))
            end
            if type(entry.container.putObject) == "function" then
              entry.container.putObject(original)
            end
          else
            if type(original.setPosition) == "function" then
              original.setPosition(position)
            end
            setupClone(original, code, rotationY)
          end
          finishClone(done)
        end
    })
    end)
    if not ok then
      print("Take failed: " .. tostring(code))
      finishClone(done)
    end
    return
  end

  print("Source cannot clone: " .. tostring(code))
  finishClone(done)
end

function setupClone(object, code, rotationY)
  if object == nil then
    return
  end
  if type(object.setRotation) == "function" then
    object.setRotation({0, rotationY or 180, 0})
  end
  if type(object.setLock) == "function" then
    object.setLock(false)
  end
  if type(object.setName) == "function" then
    object.setName("")
  end
  if type(object.setDescription) == "function" then
    object.setDescription(normalize(code))
  end
end

function parseDeck(text)
  local deck = {front = nil, back = nil, main = {}, ego = {}, upgrade = {}, extra = {}}
  local parts = splitText(text, "|")

  if parts[1] ~= "LTTS1" then
    deck.main = expandCodes(text)
    return deck
  end

  for i = 2, #parts do
    local key, value = parts[i]:match("^([^:]+):(.*)$")
    key = normalize(key)

    if key == "F" then
      deck.front = normalize(value)
    elseif key == "B" then
      deck.back = normalize(value)
    elseif key == "M" then
      deck.main = expandCodes(value)
    elseif key == "E" then
      deck.ego = expandCodes(value)
    elseif key == "U" then
      deck.upgrade = expandCodes(value)
    elseif key == "A" then
      deck.extra = expandCodes(value)
    end
  end

  return deck
end

function expandCodes(text)
  local result = {}

  for _, token in ipairs(splitText(text, ",")) do
    local clean = normalize(token)
    local rawCode, rawCount = clean:match("^([^%*]+)%*(%d+)$")
    local code = normalize(rawCode or clean)
    local count = tonumber(rawCount or "1") or 1

    if code ~= "" and code ~= "LTTS1" then
      for _ = 1, count do
        table.insert(result, code)
      end
    end
  end

  return result
end

function sortCodes(codes)
  table.sort(codes, function(a, b)
    return compareCodes(a, b) < 0
  end)
end

function compareCodes(a, b)
  local left = splitText(normalize(a), "-")
  local right = splitText(normalize(b), "-")
  local count = math.max(#left, #right)

  for i = 1, count do
    local leftPart = left[i] or ""
    local rightPart = right[i] or ""
    local leftNumber = tonumber(leftPart)
    local rightNumber = tonumber(rightPart)

    if leftNumber ~= nil and rightNumber ~= nil then
      if leftNumber ~= rightNumber then
        return leftNumber - rightNumber
      end
    elseif leftPart ~= rightPart then
      if leftPart < rightPart then
        return -1
      end
      return 1
    end
  end

  return 0
end

function addMissingList(missing, list)
  for _, code in ipairs(list or {}) do
    addMissing(missing, code)
  end
end

function addMissing(missing, code)
  if code ~= nil and code ~= "" and sourceIndex[code] == nil then
    table.insert(missing, code)
  end
end

function getSourceZone()
  if self ~= nil and type(self.getObjects) == "function" then
    return self
  end
  return nil
end

function isContainer(object)
  local objectType = tostring((object and object.type) or "")
  return objectType == "Bag" or objectType == "Infinite_Bag" or objectType == "Container"
end

function findObjectCode(object)
  local code = extractCode(readDescription(object))
  if code ~= nil then
    return code
  end
  code = extractCode(readNotes(object))
  if code ~= nil then
    return code
  end
  return extractCode(readName(object))
end

function findItemCode(item)
  local code = extractCode(item.description)
  if code ~= nil then
    return code
  end
  code = extractCode(item.gm_notes)
  if code ~= nil then
    return code
  end
  code = extractCode(item.memo)
  if code ~= nil then
    return code
  end
  code = extractCode(item.name)
  if code ~= nil then
    return code
  end
  return extractCode(item.nickname)
end

function extractCode(text)
  text = tostring(text or "")
  local bracket = text:match("%[([%w%-]+)%]")
  if bracket ~= nil then
    return normalize(bracket)
  end
  local patterns = {
    "%d+%-%a+%-%d+%-%d+",
    "%d+%-%a+%a+%-%d+%-%d+",
    "%d+%-%a+%-%d+",
    "%d+%-%a+%a+%-%d+",
    "%a+%-%d+%-%d+",
    "%a+%-%d+"
  }

  for _, pattern in ipairs(patterns) do
    local code = text:match(pattern)
    if code ~= nil then
      return normalize(code)
    end
  end
  return nil
end

function readName(object)
  if object ~= nil and type(object.getName) == "function" then
    local ok, value = pcall(function()
      return object.getName()
    end)
    if ok then
      return value
    end
  end
  return ""
end

function readDescription(object)
  if object ~= nil and type(object.getDescription) == "function" then
    local ok, value = pcall(function()
      return object.getDescription()
    end)
    if ok then
      return value
    end
  end
  return ""
end

function readNotes(object)
  if object ~= nil and type(object.getGMNotes) == "function" then
    local ok, value = pcall(function()
      return object.getGMNotes()
    end)
    if ok then
      return value
    end
  end
  return ""
end

function normalize(text)
  local value = tostring(text or "")
  value = value:gsub("^%s+", "")
  value = value:gsub("%s+$", "")
  return string.upper(value)
end

function splitText(text, separator)
  local result = {}
  local pattern = "([^" .. separator .. "]+)"

  for token in tostring(text or ""):gmatch(pattern) do
    table.insert(result, token)
  end

  return result
end
