import { useKeycloak } from "@react-keycloak/web";

export const useAuth = () => {
    const { keycloak } = useKeycloak();
  
    const logout = () => {
      clearLocalData();
      HLog("loggingout keycloak:::");
      keycloak.logout();
    };
  
    return {
      logout,
    };
  };
  