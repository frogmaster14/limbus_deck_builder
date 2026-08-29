deckCode = ""
sourceZoneGuid = "90ab8e"
sourceIndex = {}

function onLoad()
  if self ~= nil and type(self.clearButtons) == "function" then
    self.clearButtons()
  end

  makeButton("SCAN", "buttonScan", -1.4)
  makeButton("TEST", "buttonTest", 1.4)
  print("LT importer step1 loaded.")
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
    position = {x, 0.25, 0},
    rotation = {0, 180, 0},
    width = 1200,
    height = 400,
    font_size = 170
  })
end

function buttonScan()
  rebuildIndex()
end

function buttonTest()
  rebuildIndex()
  cloneOne("K-1", {-4.8, 1.2, 0})
  cloneOne("K-2", {-2.4, 1.2, 0})
  cloneOne("K-8", {0, 1.2, 0})
  cloneOne("1-E-1", {2.4, 1.2, 0})
end

function rebuildIndex()
  sourceIndex = {}

  local zone = getSourceZone()
  if zone == nil or type(zone.getObjects) ~= "function" then
    print("Source zone not found.")
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

  local count = 0
  for _ in pairs(sourceIndex) do
    count = count + 1
  end

  print("LT source index: " .. count)
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

  for _, item in ipairs(items) do
    local code = findItemCode(item)
    if code ~= nil and item.guid ~= nil then
      sourceIndex[code] = {container = container, guid = item.guid}
    end
  end
end

function cloneOne(code, position)
  local entry = sourceIndex[normalize(code)]
  if entry == nil then
    print("Missing source: " .. tostring(code))
    return
  end

  if entry.object ~= nil and type(entry.object.clone) == "function" then
    local ok, clone = pcall(function()
      return entry.object.clone({position = position, snap_to_grid = false})
    end)
    if ok and clone ~= nil then
      setupClone(clone, code)
    else
      print("Clone failed: " .. tostring(code))
    end
    return
  end

  if entry.container ~= nil and type(entry.container.takeObject) == "function" then
    entry.container.takeObject({
      guid = entry.guid,
      position = {position[1], position[2] + 2, position[3]},
      smooth = false,
      callback_function = function(original)
        if original == nil then
          print("Take failed: " .. tostring(code))
          return
        end

        if type(original.clone) == "function" then
          local clone = original.clone({position = position, snap_to_grid = false})
          setupClone(clone, code)
          if type(entry.container.putObject) == "function" then
            entry.container.putObject(original)
          end
        else
          if type(original.setPosition) == "function" then
            original.setPosition(position)
          end
          setupClone(original, code)
        end
      end
    })
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
    object.setDescription("[" .. normalize(code) .. "]")
  end
end

function getSourceZone()
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
  local code = text:match("%d+%-%a+%-%d+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  code = text:match("%d+%-%a+%-%d+")
  if code ~= nil then
    return normalize(code)
  end
  code = text:match("%a+%-%d+")
  if code ~= nil then
    return normalize(code)
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
