exports.grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};
exports.CHAT_INPUT_ACTIONS = {
  "TOGGLE_TEXT_BOLD": "Bold",
  "TOGGLE_TEXT_ITALIC": "Italic",
  "TOGGLE_TEXT_STRIKETHROUGH": "Strikethrough"
};
exports.BOOLEAN = {
  TRUE: 'true',
  FALSE: 'false'
}
exports.TOGGLE_TEXT_BOLD = {
  [this.BOOLEAN.TRUE]: 'bold',
  [this.BOOLEAN.FALSE]: 'normal'
}
exports.TOGGLE_TEXT_ITALIC = {
  [this.BOOLEAN.TRUE]: 'italic',
  [this.BOOLEAN.FALSE]: 'normal'
}