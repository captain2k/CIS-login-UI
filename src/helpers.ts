import _ from 'lodash';
import { mainInstance } from './libs/apiInstances';
import apiServices from './config/apiServices';
import { notification } from 'antd';
import i18n, { languageKeys } from './i18n';
import { Constants } from './constants';

export function HLog(...args: any) {
  if (apiServices.enable_app_log === "dev") {
    // @ts-ignore
    console.log(...args);
  }
}

HLog.render = (string: any) => {
  if (apiServices.enable_app_log === 'dev') {
    console.log(`%cRender`, 'color: #e7eb0a', string);
  }
};

export const handleRedirect = (url: string) => {
    window.open(url, "_blank");
};
export function isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  
export function addParentPermissionKey(arr: any) {
    if (isJsonString(arr)) {
      arr = JSON.parse(arr);
    }
  
    if (!Array.isArray(arr)) return arr;
  
    let result = [...arr];
    let primary = [];
    let secondary = [];
    let third = [];
  
    result.forEach((item) => {
      if (item.split(".").length < 2) primary.push(item);
      let split_item = item.split(".");
  
      if (split_item.length > 1) {
        primary.push(split_item[0]);
        secondary.push([split_item[0], split_item[1]].join("."));
        third.push(split_item.join("."));
      }
    });
    result = [...primary, ...secondary, ...third];
    result = _.uniq(result);
    return result;
}

export const common_post = async (url: string, body: any) => {
  try {
    const response = await mainInstance.post(url, body);
    let result = response.data;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      HLog(error.message as any);
      if (error.message.includes("timeout")) {
        notification.error({
          message: i18n.t(languageKeys.app_loi_ket_noi),
          placement: "bottomLeft",
        });
      }
      return null;
    }
  }
};

export function getUrlApi(stringUrl: string) {
  return stringUrl;
}

export const clearLocalData = () => {
  const DBDeleteRequest = window.indexedDB.deleteDatabase(Constants.INDEX_DB_NAME);

  DBDeleteRequest.onerror = (e) => {
    HLog("Error deleting database.");
    window.location.reload();
  };

  DBDeleteRequest.onsuccess = (e) => {
    HLog("Database deleted successfully");
  };

  let arrLocalKey = Object.keys(localStorage);

  for (let i = 0; i < arrLocalKey.length; i++) {
    if (!localKeyNotChange.includes(arrLocalKey[i])) {
      localStorage.removeItem(arrLocalKey[i]);
    }
  }
  // localStorage.clear();
};