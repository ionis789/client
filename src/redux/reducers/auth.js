import { authorization } from "../../API/Authorization.js";
const LOAD_USER_DATA = "LOAD_USER_DATA";
const REG_RESPONSE = "REG_RESPONSE";
const LOG_RESPONSE = "LOG_RESPONSE";
const RESET_AUTH_RESPONSE = "RESET_AUTH_RESPONSE";
const defaultState = {
  isAuthorized: false,
  loggedUserID: null,
  loggedUserName: null,
  loggedUserMail: null,
  regResponse: null,
  logResponse: null,
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_AUTH_RESPONSE: {
      return {
        ...state,
        logResponse: null,
        regResponse: null,
      };
    }

    case REG_RESPONSE: {
      return {
        ...state,
        regResponse: action.response,
      };
    }
    case LOG_RESPONSE: {
      debugger;
      return {
        ...state,
        logResponse: action.response,
      };
    }

    case LOAD_USER_DATA: {
      debugger;
      const loggedUserInfoString = localStorage.getItem("loggedUserInfo");
      const loggedUserInfo = JSON.parse(loggedUserInfoString);
      return {
        ...state,
        isAuthorized: loggedUserInfo ? loggedUserInfo.isAuthorized : false,
        loggedUserID: loggedUserInfo ? loggedUserInfo.loggedUserID : null,
        loggedUserName: loggedUserInfo ? loggedUserInfo.loggedUserName : null,
        loggedUserMail: loggedUserInfo ? loggedUserInfo.loggedUserMail : null,
      };
    }
    default:
      return state;
  }
};

export const logInSubmitTC = (mail, password) => async (dispatch) => {
  debugger;
  const response = await authorization.logInRequest(mail, password);
  response.status === 200 ? dispatch(loadUserData()) : dispatch(logResponse(response));
};
export const regSubmitTC = (mail, name, password) => async (dispatch) => {
  const response = await authorization.regRequest(mail, name, password);
  dispatch(regResponse(response));
};

export const loadUserData = () => ({
  type: LOAD_USER_DATA,
});
export const regResponse = (response) => ({ type: REG_RESPONSE, response });
export const logResponse = (response) => ({ type: LOG_RESPONSE, response });
export const resetAuthResponse = () => ({ type: RESET_AUTH_RESPONSE });
export default auth;
