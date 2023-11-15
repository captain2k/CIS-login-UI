// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const apiServices = {
  enable_app_log: window.NODE_ENV, //ẩn, hiện log

  H247_BS_HIS: "https://cis-api.dev.deepcare.vn/", // api môi trường dev CIS
  H247_EVENT_SOURCE: window.REACT_APP_H247_BROADCAST_SERVICE, //api eventsource mt dev

  // GATEWAY
  GATEWAY_LIS: window.GATEWAY + "lis/",
  GATEWAY_CIS: window.GATEWAY + "cis/",
  GATEWAY_BROADCAST: window.GATEWAY + "broadcast/",

  // CLIENT
  URL_CIS: window.CIS_WEB_UI_URL,
  URL_LIS: window.LIS_WEB_UI_URL,
  URL_DANH_MUC: window.DM_WEB_UI_URL,
  URL_REPORT: window.RP_WEB_UI_URL,
  URL_PACS: window.PACS_WEB_UI_URL,

  //KEYCLOAK
  KEYCLOAK_CLIENT_ID: window.KEYCLOAK_CLIENT_ID,
  KEYCLOAK_URL: window.KEYCLOAK_URL,
  KEYCLOAK_REALM: window.KEYCLOAK_REALM
  
};

export default apiServices;
