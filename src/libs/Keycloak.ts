import Keycloak from "keycloak-js";
import apiServices from "../config/apiServices";

const keycloak = new Keycloak({
  url: apiServices.KEYCLOAK_URL,
  realm: apiServices.KEYCLOAK_REALM,
  clientId: apiServices.KEYCLOAK_CLIENT_ID,
  // authenticated:true,
});

export default keycloak;
