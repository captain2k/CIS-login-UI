import { takeLatest, call, put } from "redux-saga/effects";
import { addParentPermissionKey, common_post, HLog } from "../../helpers";
import { doCheckUser, updateConfig, updateConfigSuccess, updateHospitalLocal, updateUser } from "../slices/authSlice";
import { apis, keys } from "../../constants";

export function* watchDoAuth() {
  yield takeLatest(doCheckUser.type, handleCheckUser);
}

export function* handleCheckUser(action) {
  try {
    const { info } = action.payload;

    const req = {
      partner_code: info.partner_code,
      NHANSU_ID: info.nhansu_id,
      PASSWORD: info.password,
    };

    const res = yield call(() => common_post(apis.login, req));

    if (res.status === "OK") {
      const { user, partner_code, config, version_web } = res;
      // lấy danh sách quyền CIS khi đăng nhập (mặc định lấy key QUYEN)
      let QUYEN = [];
      let QUYEN_MODULE = [];
      if(!!user.QUYEN_MODULE) {
        QUYEN_MODULE  = JSON.parse(user.QUYEN_MODULE);
      } 

      if (!!user.QUYEN_CIS && !!user.QUYEN_CIS.length) {
        QUYEN = addParentPermissionKey(user.QUYEN_CIS);
      } else {
        // QUYEN = addParentPermissionKey(user.QUYEN);
      }

      user.QUYEN = QUYEN;
      user.QUYEN_MODULE = QUYEN_MODULE;

      yield localStorage.setItem(keys.user_data, JSON.stringify(user));

      yield put(updateUser({ ...user, partner_code, config,version_web }));
    } else {
      throw JSON.stringify(res);
    }
  } catch (error) {
    HLog(error);
  }
}

export function* watchUpdateHospital() {
  yield takeLatest(updateHospitalLocal.type, handleUpdateHospital);
}

export function* handleUpdateHospital(action) {
  HLog("Update hospital SAGA", action.payload);
  try {
    let data = yield localStorage.getItem(keys.user_data);
    let parseData = JSON.parse(data);
    let newData = { ...parseData, benh_vien: action.payload };
    yield localStorage.setItem(keys.user_data, JSON.stringify(newData));
  } catch (error) {
    HLog("error", error);
  }
}

export function* watchUpdateConfig() {
  yield takeLatest(updateConfig.type, handleUpdateConfig);
}

export function* handleUpdateConfig(action) {
  let { config, user } = action.payload;
  let QUYEN = [];

  // lấy danh sách quyền CIS mỗi khi reload (mặc định lấy key QUYEN)
  QUYEN = !!user.QUYEN_CIS && !!user.QUYEN_CIS.length ? addParentPermissionKey(user.QUYEN_CIS) : addParentPermissionKey(user.QUYEN);

  user.QUYEN = QUYEN;

  try {
    let data = yield localStorage.getItem(keys.user_data);
    let parseData = JSON.parse(data);
    let newData = { ...parseData, ...user, config };
    yield localStorage.setItem(keys.user_data, JSON.stringify(newData));
    yield put(updateConfigSuccess(newData));
  } catch (error) {
    HLog("error", error);
  }
}
