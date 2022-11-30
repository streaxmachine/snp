import { SET_SNP_SHOW_INFO } from "./actions";
import { SET_HOUSE_SHOW_INFO } from "./actions";

const initialState = {
  snpInfo: false,
  houseInfo: false,
};

export const sideBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SNP_SHOW_INFO:
      return {
        snpInfo: !state.snpInfo,
        houseInfo: false,
      };
    case SET_HOUSE_SHOW_INFO:
      return {
        snpInfo: false,
        houseInfo: !state.houseInfo,
      };
    default:
      return state;
  }
};
