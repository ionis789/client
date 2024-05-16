import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.jsx";
export const WithAuth = (WrappedComponent) => {
  const AuthComponent = ({ isAuthorized, loadUserData, ...props }) => {
    useEffect(() => {
      loadUserData();
    }, [isAuthorized, loadUserData]);
    return isAuthorized ? (
      <WrappedComponent {...props} />
    ) : (
      <WelcomePageContainer />
    );
  };
  const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
  });
  const mapDispatchToProps = {
    loadUserData,
  };
  return connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
};
