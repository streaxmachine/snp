import { SHOW_SIDEBAR } from "./actions";

// const initialState = {
//   snpInfo: false,
//   houseInfo: false,
// };

const initialState = {
  sidebar: null,
};

export const sideBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_SIDEBAR: {
      return {
        sidebar: payload,
      };
    }
    default:
      return state;
  }
};
