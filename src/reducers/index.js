import { combineReducers } from "redux";
import goods from "./goods";
import styleSelect from "./styleSelect";
import colorSelect from "./colorSelect";

export default combineReducers({
  goods,
  styleSelect,
  colorSelect
});
