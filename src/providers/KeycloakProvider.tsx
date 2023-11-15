import { ReactKeycloakProvider } from "@react-keycloak/web";
import { Spin } from "antd";
import keycloak from "../libs/Keycloak";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actionUrls } from "../constant/urlKeys";
import { keys } from '../constant/keys'
import apiServices from "@/config/apiServices";


export const KeycloakProvider = ({ children }) => {
  // const dispatch = useDispatch();
  // config logout các module ở đây nhé các thầy
  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const action = searchParams.get(actionUrls.redirect)
    if (action === actionUrls.logout) {
      localStorage.setItem(keys.REDIRECT, action);
    }
  }, []);

  const handleTokens = (tokens) => {
    // console.log('tokens on Keycloak provider',tokens)
    // if (!!tokens.token) {
    //   localStorage.setItem(keys.access_token, tokens.token);
    //   localStorage.setItem(keys.refresh_token, tokens.refreshToken);

    //   tokens.info = jwtDecode(tokens.token);

    //   dispatch(updateTokens(tokens));
    // }
  };

  const handleEvent = (e) => {
    console.log("event keycloak", e);
  };

  console.log(keycloak, 'keycloak');


  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      LoadingComponent={<LoadingComponent />}
      onTokens={handleTokens}
      initOptions={{
        checkLoginIframe: false,
        // onLoad:'login-required'
      }}
      onEvent={handleEvent}
      autoRefreshToken={false}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

const LoadingComponent = () => (
  <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <Spin spinning />
    <h3 className="blue-txt">Hệ thống đang xác thực...</h3>
  </div>
);
