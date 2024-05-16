import React, { useEffect, useState } from "react";
import S from "./S.module.css";
import SignUp from "./SignUp/SignUp.jsx";
import SignIn from "./SignIn/SignIn.jsx";
const WelcomePage = ({ ...props }) => {
  const [auth, setAuth] = useState("");
  return (
    <div className={S.wrapper}>
      <div className={S.form}>
        {auth === "reg" ? (
          <SignUp
            resetAuthResponse={props.resetAuthResponse}
            goBack={() => setAuth("")}
            regSubmitTC={props.regSubmitTC}
            regResponse={props.regResponse}
            goToLogIn={() => setAuth("log")}
          />
        ) : auth === "log" ? (
          <SignIn
            loadUserData={props.loadUserData}
            resetAuthResponse={props.resetAuthResponse}
            goBack={() => setAuth("")}
            logInSubmitTC={props.logInSubmitTC}
            isAuthorized={props.isAuthorized}
            logResponse={props.logResponse}
          />
        ) : (
          <>
            <div
              className={
                "hover:cursor-pointer hover:opacity-70 transition duration-300"
              }
              onClick={() => {
                setAuth("reg");
              }}
            >
              Sign Up
            </div>
            <div
              className={
                "hover:cursor-pointer hover:opacity-70 transition duration-300"
              }
              onClick={() => {
                setAuth("log");
              }}
            >
              Sign In
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
