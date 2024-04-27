import React from "react";
import S from "./S.module.css";
const Preloader = () => {
  return (
    <div className="flex justify-center items-center w-16 h-16">
      <div
        className={`${S.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12`}
      ></div>
    </div>
  );
};

export default Preloader;
