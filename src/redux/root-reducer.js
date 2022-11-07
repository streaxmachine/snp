import { combineReducers } from "redux";
import { houseInfoReduer, snpInfoReduer } from "./reducer";

export const rootReducer = combineReducers({
  snpInfo: snpInfoReduer,
  houseInfo: houseInfoReduer,
});
