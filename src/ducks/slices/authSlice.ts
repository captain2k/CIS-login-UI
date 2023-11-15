import { createSlice } from '@reduxjs/toolkit';

const initState = {
  // isOk: undefined,
  // showWarningLogout: false,
  // message: undefined,
  user: undefined,
  tokens: undefined,
  route:undefined,
  versionWeb : undefined
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    doCheckUser() {},

    updateUser(state, action) {
      state.user = action.payload;
    },

    updateTokens(state, action) {
      state.tokens = action.payload;
    },

    // doLogin() {},
    // doLogout() {},
    // authSuccess(state, action) {
    //   return action.payload;
    // },
    updateHospitalLocal(state, action) {
      state.user = { ...state.user, benh_vien: action.payload };
    },
    updateConfig() {},
    updateConfigSuccess(state, action) {
      state.user = action.payload;
    },
    updateVersionWeb (state, action) {
      state.versionWeb = action.payload
    },
    // authFail(state, action) {
    //   return action.payload;
    // },
    // showWarningLogout(state, action) {
    //   state.showWarningLogout = true;
    // },
    // resetAuthMessage(state) {
    //   return {
    //     ...state,
    //     isOk: undefined,
    //     message: undefined,
    //     showWarningLogout: false,
    //   };
    // },
    setRoute : (state,action) => {
      state.route = action.payload;
    },
  },
});

export const {
  doCheckUser,
  updateUser,
  updateTokens,
  // doLogin,
  // doLogout,
  // authSuccess,
  // authFail,
  // resetAuthMessage,
  updateHospitalLocal,
  // showWarningLogout,
  updateConfig,
  updateConfigSuccess,
  setRoute,
  updateVersionWeb
} = authSlice.actions;

export default authSlice.reducer;
