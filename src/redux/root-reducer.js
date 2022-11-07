import { combineReducers } from "redux";
import { snpInfoReduer } from "./reducer";

export const rootReducer = combineReducers({
  snpInfo: snpInfoReduer,
});
