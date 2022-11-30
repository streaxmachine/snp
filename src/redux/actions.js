export const SET_SNP_SHOW_INFO = "SET_SNP_INFO";
export const SET_HOUSE_SHOW_INFO = "SET_HOUSE_INFO";
export const SET_DRAG_MOUSE = "SET_DRAG_MOUSE";

export const SHOW_SIDEBAR = "SHOW_SIDEBAR";

export const setSidebar = (sidebarId) => ({
  type: SHOW_SIDEBAR,
  payload: sidebarId,
});

export const setSnpShowInfo = (show) => ({
  type: SET_SNP_SHOW_INFO,
  payload: show,
});

export const setHouseShowInfo = (show) => ({
  type: SET_HOUSE_SHOW_INFO,
  payload: show,
});

export const setDragMouse = (isDragging) => ({
  type: SET_DRAG_MOUSE,
  payload: isDragging,
});
