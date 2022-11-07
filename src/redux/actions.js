export const SET_SNP_SHOW_INFO = "SET_SNP_INFO";
export const SET_HOUSE_SHOW_INFO = "SET_HOUSE_INFO";

export const setSnpShowInfo = (show) => ({
  type: SET_SNP_SHOW_INFO,
  payload: show,
});

export const setHouseShowInfo = (show) => ({
  type: SET_HOUSE_SHOW_INFO,
  payload: show,
});
