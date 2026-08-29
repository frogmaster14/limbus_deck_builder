function onLoad()
  if self ~= nil and type(self.clearButtons) == "function" then
    self.clearButtons()
  end

  if self ~= nil and type(self.createButton) == "function" then
    self.createButton({
      label = "OK",
      click_function = "buttonOk",
      function_owner = self,
      position = {0, 0.25, 0},
      rotation = {0, 180, 0},
      width = 1200,
      height = 400,
      font_size = 180
    })
  end

  print("LT smoke test loaded.")
end

function buttonOk()
  print("LT smoke test button clicked.")
end
