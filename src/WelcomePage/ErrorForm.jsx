import React from "react";

const ErrorForm = ({ message, resetAuthResponse, goBack }) => {
  return (
    <div>
      <p className={"text-red-500 text-center"}>{message}</p>
      <div className={"flex justify-around "}>
        <button
          className={
            "text-xl font-medium mt-4 hover:opacity-80 transition duration-300"
          }
          onClick={goBack}
        >
          Go back
        </button>
        <button
          className={
            "text-xl font-medium mt-4 hover:opacity-80 transition duration-300"
          }
          onClick={resetAuthResponse}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorForm;
