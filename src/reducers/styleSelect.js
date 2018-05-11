export default function(state = [], action) {
  if (action.type === "STYLE_SELECT") {
    return action.payload;
  }
  return state;
}
