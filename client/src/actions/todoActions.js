export function addText(text) {
  return {
    type: 'CHANGE_TEXT',
    payload: text,
  }
}