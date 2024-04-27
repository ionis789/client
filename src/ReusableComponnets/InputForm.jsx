import React from "react";

const InputForm = ({ placeHolder, setInputData }) => {
  return (
    <div>
      <input
        onChange={(e) => setInputData(e.target.value)}
        className={
          "bg-neutral-500  w-full px-3 py-2 font-semibold rounded-xl border-none  ring-blue-400 hover:ring-2 focus:ring-4 focus:outline-none focus:placeholder:opacity-0  transition duration-300 text-2xl"
        }
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputForm;
