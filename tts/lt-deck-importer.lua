deckCode = "LTTS1|F:1-I-1|B:6-I-1|M:1-B-1*2,2-B-1*2,3-B-1*2,4-B-1*2,5-B-1*2,6-B-1*2,1-C-1-1*2,2-C-1-1*2,3-C-1-1*2,6-C-1-1*2|E:1-E-1"
sourceZoneGuid = "90ab8e"

sourceIndex = {}

function onLoad()
  safeRun(function()
    if self ~= nil and type(self.clearButtons) == "function" then
      self.clearButtons()
    end
    makeButton("IMPORT", "buttonImport", -1.7)
    makeButton("SCAN", "buttonScan", 0)
    makeButton("TEST", "buttonTest", 1.7)
    print("LT deck importer ready.")
  end, "onLoad")
end

function makeButton(label, clickFunction, x)
  if self == nil or type(self.createButton) ~= "function" then
    print("Button unavailable. Put this script on the 90ab8e scripting trigger.")
    return
  end

  self.createButton({
    label = label,
    click_function = clickFunction,
    function_owner = self,
    position = {x, 0.25, 0},
    rotation = {0, 180, 0},
    width = 1500,
    height = 420,
    font_size = 180,
    color = {0.30, 0.16, 0.06, 0.95},
    font_color = {1, 0.82, 0.36, 1}
  })
end

function buttonImport()
  importDeck(deckCode)
end

function buttonScan()
  rebuildIndex()
end

function buttonTest()
  cloneCodes("K-1,K-2,K-8,1-E-1")
end

function importDeck(codeText)
  safeRun(function()
    rebuildIndex()
    local deck = parseDeck(codeText)
    local missing = {}

    addMissing(missing, deck.front)
    addMissing(missing, deck.back)
    addMissingList(missing, deck.ego)
    addMissingList(missing, deck.upgrade)
    addMissingList(missing, deck.main)
    addMissingList(missing, deck.extra)

    if #missing > 0 then
      print("Missing source cards: " .. table.concat(missing, ", "))
      return
    end

    if deck.front ~= nil then
      cloneCode(deck.front, {-7.5, 1.2, -4.5})
    end
    if deck.back ~= nil then
      cloneCode(deck.back, {-4.8, 1.2, -4.5})
    end

    local order = 0
    for i, code in ipairs(deck.ego) do
      delayedClone(code, {-1.8 + ((i - 1) * 2.45), 1.2, -4.5}, order)
      order = order + 1
    end
    for i, code in ipairs(deck.upgrade) do
      delayedClone(code, {0.9 + ((i - 1) * 2.45), 1.2, -4.5}, order)
      order = order + 1
    end
    for i, code in ipairs(deck.main) do
      local col = (i - 1) % 10
      local row = math.floor((i - 1) / 10)
      delayedClone(code, {-10 + (col * 2.45), 1.2 + (i * 0.04), row * 3.45}, order)
      order = order + 1
    end
    for i, code in ipairs(deck.extra) do
      local col = (i - 1) % 10
      local row = math.floor((i - 1) / 10)
      delayedClone(code, {-10 + (col * 2.45), 1.2 + (i * 0.04), 7.2 + (row * 3.45)}, order)
      order = order + 1
    end

    print("LT deck import complete.")
  end, "importDeck")
end

function cloneCodes(codeText)
  safeRun(function()
    rebuildIndex()
    local codes = expandCodes(codeText)
    local missing = {}
    addMissingList(missing, codes)
    if #missing > 0 then
      print("Missing source cards: " .. table.concat(missing, ", "))
      return
    end

    for i, code in ipairs(codes) do
      cloneCode(code, {-10 + ((i - 1) * 2.45), 1.2 + (i * 0.04), 0})
    end
    print("LT test clone complete.")
  end, "cloneCodes")
end

function rebuildIndex()
  sourceIndex = {}
  local count = 0
  local zone = getZone()

  if zone == nil or type(zone.getObjects) ~= "function" then
    print("Source zone not found: " .. tostring(sourceZoneGuid))
    return
  end

  local ok, objects = pcall(function()
    return zone.getObjects()
  end)
  if not ok or objects == nil then
    print("Could not read source zone.")
    return
  end

  for _, object in ipairs(objects) do
    indexObject(object)
  end

  for _ in pairs(sourceIndex) do
    count = count + 1
  end

  print("LT source index: " .. count)
end

function indexObject(object)
  if object == nil or object == self then
    return
  end

  if isBag(object) then
    indexBag(object)
    return
  end

  local code = objectCode(object)
  if code ~= nil then
    sourceIndex[code] = {object = object}
  end
end

function indexBag(bag)
  if bag == nil or type(bag.getObjects) ~= "function" then
    return
  end

  local ok, items = pcall(function()
    return bag.getObjects()
  end)
  if not ok or items == nil then
    return
  end

  for _, item in ipairs(items) do
    local code = itemCode(item)
    if code ~= nil and item.guid ~= nil then
      sourceIndex[code] = {bag = bag, guid = item.guid}
    end
  end
end

function cloneCode(code, pos)
  local entry = sourceIndex[code]
  if entry == nil then
    print("Missing source: " .. tostring(code))
    return
  end

  if entry.object ~= nil and type(entry.object.clone) == "function" then
    local ok, clone = pcall(function()
      return entry.object.clone({position = pos, snap_to_grid = false})
    end)
    if ok and clone ~= nil then
      setupClone(clone, code)
    end
    return
  end

  if entry.bag ~= nil and type(entry.bag.takeObject) == "function" then
    local takePos = {pos[1], pos[2] + 2, pos[3]}
    entry.bag.takeObject({
      guid = entry.guid,
      position = takePos,
      smooth = false,
      callback_function = function(original)
        safeRun(function()
          if original == nil then
            return
          end

          if type(original.clone) == "function" then
            local clone = original.clone({position = pos, snap_to_grid = false})
            setupClone(clone, code)
            if type(entry.bag.putObject) == "function" then
              entry.bag.putObject(original)
            end
          else
            if type(original.setPosition) == "function" then
              original.setPosition(pos)
            end
            setupClone(original, code)
          end
        end, "bagCallback")
      end
    })
  end
end

function delayedClone(code, pos, order)
  if type(Wait) == "table" and type(Wait.time) == "function" then
    Wait.time(function()
      cloneCode(code, pos)
    end, order * 0.12)
  else
    cloneCode(code, pos)
  end
end

function setupClone(object, code)
  if object == nil then
    return
  end
  if type(object.setRotation) == "function" then
    object.setRotation({0, 180, 0})
  end
  if type(object.setLock) == "function" then
    object.setLock(false)
  end
  if type(object.setName) == "function" then
    object.setName("")
  end
  if type(object.setDescription) == "function" then
    object.setDescription("[" .. code .. "]")
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
    local clean = trim(token)
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

function objectCode(object)
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

function itemCode(item)
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
  local code = text:match("%d+%-%a+%-%d+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  code = text:match("%d+%-%a+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  code = text:match("%a+%-%d+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  code = text:match("%a+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  return nil
end

function getZone()
  if self ~= nil and type(self.getObjects) == "function" then
    return self
  end
  if type(getObjectFromGUID) == "function" then
    local ok, object = pcall(function()
      return getObjectFromGUID(sourceZoneGuid)
    end)
    if ok then
      return object
    end
  end
  return nil
end

function isBag(object)
  local objectType = tostring((object and object.type) or "")
  return objectType == "Bag" or objectType == "Infinite_Bag" or objectType == "Container"
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
  return string.upper(trim(text or ""))
end

function trim(text)
  local value = tostring(text or "")
  value = value:gsub("^%s+", "")
  value = value:gsub("%s+$", "")
  return value
end

function splitText(text, separator)
  local result = {}
  local pattern = "([^" .. separator .. "]+)"
  for token in tostring(text or ""):gmatch(pattern) do
    table.insert(result, token)
  end
  return result
end

function safeRun(callback, label)
  local ok, message = pcall(callback)
  if not ok then
    print("LT importer error at " .. tostring(label) .. ": " .. tostring(message))
  end
end
