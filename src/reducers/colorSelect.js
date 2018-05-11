export default function(state = [], action) {
  if (action.type === "COLOR_SELECT") {
    return action.payload;
  }
  return state;
}
