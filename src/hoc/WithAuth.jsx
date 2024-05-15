import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import WelcomePage from "../WelcomePage/WelcomePage.jsx";
const WithAuth = (Component) => {
  const EnhancedComponent = (isAuthorized, loadUserData, { ...props }) => {
    useEffect(() => {
      debugger;
      loadUserData();
    }, []);
    if (isAuthorized) {
      return <Component {...props} />;
    } else {
      return <WelcomePage />;
    }
  };
  const mapStateToProps = (state) => {
    return {
      isAuthorized: state.auth.isAuthorized,
    };
  };
  connect(mapStateToProps, { loadUserData })(EnhancedComponent);
};
export default WithAuth;
