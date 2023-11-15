
// danh sách các biến URL định nghĩa trong biến global
let urlKeys = {
  CIS_WEB_UI_URL: "CIS_WEB_UI_URL",
  LIS_WEB_UI_URL: "LIS_WEB_UI_URL",
  DM_WEB_UI_URL: "DM_WEB_UI_URL",
  RP_WEB_UI_URL: "RP_WEB_UI_URL",
  PRM_WEB_UI_URL:"PRM_WEB_UI_URL",
  PACS_WEB_UI_URL:"PACS_WEB_UI_URL",
};
// các thao tác thông qua URL
export const actionUrls = {
  redirect: "redirect",
  logout:"LOGOUT",
}

urlKeys = Object.freeze(urlKeys);

export default urlKeys;