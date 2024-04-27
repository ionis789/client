import React from "react";
import WelcomePage from "./WelcomePage.jsx";
import { connect } from "react-redux";
import {
  logInSubmitTC,
  logResponse,
  regSubmitTC,
  resetAuthResponse,
} from "../redux/reducers/auth.js";

const WelcomePageContainer = ({
  regSubmitTC,
  logInSubmitTC,
  isAuthorized,
  regResponse,
  logResponse,
  resetAuthResponse,
}) => {
  return (
    <WelcomePage
      logInSubmitTC={logInSubmitTC}
      regSubmitTC={regSubmitTC}
      isAuthorized={isAuthorized}
      regResponse={regResponse}
      logResponse={logResponse}
      resetAuthResponse={resetAuthResponse}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    regResponse: state.auth.regResponse,
    logResponse: state.auth.logResponse,
  };
};
export default connect(mapStateToProps, {
  regSubmitTC,
  logInSubmitTC,
  resetAuthResponse,
})(WelcomePageContainer);
