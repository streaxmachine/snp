import { SET_SNP_SHOW_INFO } from "./actions";

export const snpInfoReduer = (state = false, { type, payload }) => {
  switch (type) {
    case SET_SNP_SHOW_INFO:
      return payload;
    default:
      return state;
  }
};
