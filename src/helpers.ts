import _ from 'lodash';
import { mainInstance } from './libs/apiInstances';
import apiServices from './config/apiServices';
import { notification } from 'antd';
import i18n, { languageKeys } from './i18n';
import { Constants } from './constants';
import { featureKeys, keyLoaiNhanVien, localKeyNotChange } from './constants/keys';

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

export const getImageFromSever = (ID: string) => {
  if (ID && ID !== "") {
    return `${apiServices.GATEWAY_CIS}public/file?ID=${ID}`;
  }
  return "";
};

export const isAccessAllowed = (userProfile: any, featureKey: string = "", strict:boolean = false) => {
  if (featureKey === featureKeys.ho_tro_khach_hang) return true;
  let { QUYEN_MODULE = [] } = userProfile;

  if(!QUYEN_MODULE) return false;

  let featureList = [];

  if (typeof QUYEN_MODULE === "string" && QUYEN_MODULE.includes("[")) {
    let parseList = JSON.parse(QUYEN_MODULE);
    if(Array.isArray(parseList)) {
      featureList = [...parseList];
    }
  } else if(Array.isArray(QUYEN_MODULE)) {
    featureList = [...QUYEN_MODULE];
  }

  if (typeof featureList !== "object") {
    return false;
  }
  const isAdmin = userProfile.NHOM_NHAN_SU === keyLoaiNhanVien.quan_tri;
  // check config nội trú
  const isNoiTru = userProfile.config && userProfile.config.NOI_TRU ? userProfile.config.NOI_TRU : false;
  if (!isNoiTru && featureKey === featureKeys.quan_ly_noi_tru) {
    return false;
  }

  ///CHECK CONFIG KHO THUỐC
  const isKhoThuoc = userProfile.config.KHO_THUOC || null;
  // nếu viện không có config kho thuốc thì ẩn quản lý dược vậy tư
  if (!isKhoThuoc && featureKey === featureKeys.quan_ly_duoc_ngoai_tru) {
    return false;
  }
  // nếu viện không có config kho thuốc thì ẩn báo cáo dược
  if (!isKhoThuoc && featureKey === `${featureKeys.bao_cao}.${featureKeys.bao_cao_duoc}`) {
    return false;
  }

  // nếu là admin thì mặc định là hết quyền
  if (isAdmin) return true;

  if (!featureList || (Array.isArray(featureList) && featureList.length === 0)) {
    return false;
  }
  if ((featureList && Array.isArray(featureList)) && featureList.find((f) => f.includes("DUOC.QL_DUOC_NGOAITRU.BAO_CAO"))) {
    featureList.push(`${featureKeys.bao_cao}.${featureKeys.bao_cao_duoc_ngoai_tru}`);
  }
  // const checkResult = featureList.some((feature) => (!!strict ? feature === featureKey : feature.includes(featureKey)));
  const checkResult = featureList.some((feature) => feature.includes(featureKey));

  return checkResult;
};