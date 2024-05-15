import React, { useState } from "react";
import InputForm from "../../ReusableComponnets/InputForm.jsx";
import { FaArrowLeft } from "react-icons/fa6";
import ErrorForm from "../ErrorForm.jsx";
const SignUp = ({
  goBack,
  regSubmitTC,
  regResponse,
  goToLogIn,
  resetAuthResponse,
}) => {
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();
    regSubmitTC(mail, name, password);
  };
  return (
    <div>
      <div
        onClick={goBack}
        className={
          " hover:cursor-pointer hover:opacity-70 transition duration-300 inline-block"
        }
      >
        <FaArrowLeft />
      </div>
      <form className={"bg-neutral-800 p-4 rounded-xl flex flex-col gap-4"}>
        {!regResponse ? (
          <>
            <InputForm setInputData={setMail} placeHolder={"Email"} />
            <InputForm setInputData={setName} placeHolder={"Name"} />
            <InputForm setInputData={setPassword} placeHolder={"Password"} />
            <button
              onClick={(e) => handleRegistration(e)}
              className={
                "hover:cursor-pointer hover:opacity-70 transition duration-300"
              }
            >
              Create account
            </button>
          </>
        ) : (
          <div>
            {regResponse.status == 200 ? (
              <span className={"flex  flex-col  gap-4 justify-center"}>
                <p className={"text-green-500"}>{regResponse.message}</p>
                <button
                  className={"text-xl font-medium hover:opacity-80"}
                  onClick={goToLogIn}
                >
                  Go to Log In form
                </button>
              </span>
            ) : (
              <ErrorForm
                message={regResponse.message}
                resetAuthResponse={resetAuthResponse}
                goBack={goBack}
              />
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
