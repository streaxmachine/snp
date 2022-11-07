import { combineReducers } from "redux";
import { draggingMouseReduer, houseInfoReduer, snpInfoReduer } from "./reducer";

export const rootReducer = combineReducers({
  snpInfo: snpInfoReduer,
  houseInfo: houseInfoReduer,
  dragInfo: draggingMouseReduer,
});
