import React, { useState } from "react";
import S from "./S.module.css";
import Registration from "./Registration/Registration.jsx";
import LogIn from "./LogIn/LogIn.jsx";
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
          <Registration
            resetAuthResponse={resetAuthResponse}
            goBack={() => setAuth("")}
            regSubmitTC={regSubmitTC}
            regResponse={regResponse}
            goToLogIn={() => setAuth("log")}
          />
        ) : auth === "log" ? (
          <LogIn
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
              Register
            </div>
            <div
              className={
                "hover:cursor-pointer hover:opacity-70 transition duration-300"
              }
              onClick={() => {
                setAuth("log");
              }}
            >
              Log In
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
