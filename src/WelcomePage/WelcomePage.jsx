import React, { useEffect, useState } from "react";
import S from "./S.module.css";
import SignUp from "./SignUp/SignUp.jsx";
import SignIn from "./SignIn/SignIn.jsx";
const WelcomePage = ({
  regSubmitTC,
  logInSubmitTC,
  isAuthorized,
  regResponse,
  resetAuthResponse,
  logResponse,
}) => {
  const [auth, setAuth] = useState("");
  return (
    <div className={S.wrapper}>
      <div className={S.form}>
        {auth === "reg" ? (
          <SignUp
            resetAuthResponse={resetAuthResponse}
            goBack={() => setAuth("")}
            regSubmitTC={regSubmitTC}
            regResponse={regResponse}
            goToLogIn={() => setAuth("log")}
          />
        ) : auth === "log" ? (
          <SignIn
            resetAuthResponse={resetAuthResponse}
            goBack={() => setAuth("")}
            logInSubmitTC={logInSubmitTC}
            isAuthorized={isAuthorized}
            logResponse={logResponse}
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
