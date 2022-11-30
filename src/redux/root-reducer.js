import { combineReducers } from "redux";
import { sideBarReducer } from "./reducer";

export const rootReducer = combineReducers({
  sideBar: sideBarReducer,
});
