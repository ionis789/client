import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../ReusableComponnets/InputForm.jsx";
import { FaArrowLeft } from "react-icons/fa6";
import ErrorForm from "../ErrorForm.jsx";
const LogIn = ({
  goBack,
  logInSubmitTC,
  isAuthorized,
  logResponse,
  resetAuthResponse,
}) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    logInSubmitTC(mail, password);
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate("/dialogs");
    }
  }, [isAuthorized]);

  return (
    <div>
      <div
        onClick={goBack}
        className={
          "hover:cursor-pointer hover:opacity-70 transition duration-300 inline-block"
        }
      >
        <FaArrowLeft />
      </div>
      {!logResponse ? (
        <form className={"bg-neutral-800 p-4 rounded-xl flex flex-col gap-4"}>
          <InputForm placeHolder={"Email"} setInputData={setMail} />
          <InputForm placeHolder={"Password"} setInputData={setPassword} />
          <button
            className={
              "hover:cursor-pointer hover:opacity-70 transition duration-300"
            }
            onClick={(e) => handleLogIn(e)}
          >
            Log In
          </button>
        </form>
      ) : (
        <ErrorForm
          message={logResponse.message}
          goBack={goBack}
          resetAuthResponse={resetAuthResponse}
        />
      )}
    </div>
  );
};

export default LogIn;
