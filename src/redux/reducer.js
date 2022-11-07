import { SET_SNP_SHOW_INFO } from "./actions";
import { SET_HOUSE_SHOW_INFO } from "./actions";
import { SET_DRAG_MOUSE } from "./actions";

export const snpInfoReduer = (state = false, { type, payload }) => {
  switch (type) {
    case SET_SNP_SHOW_INFO:
      return payload;
    default:
      return state;
  }
};

export const houseInfoReduer = (state = false, { type, payload }) => {
  switch (type) {
    case SET_HOUSE_SHOW_INFO:
      return payload;
    default:
      return state;
  }
};

export const draggingMouseReduer = (state = false, { type, payload }) => {
  switch (type) {
    case SET_DRAG_MOUSE:
      return payload;
    default:
      return state;
  }
};
