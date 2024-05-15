import React from "react";

const LeftMessageBlock = ({ messageText }) => {
  return (
    <div
      className={"p-2 m-4 rounded-xl bg-stone-500"}
      style={{ maxWidth: "70%" }}
    >
      <p
        className={"text-lg font-normal opacity-100"}
        style={{ wordWrap: "break-word" }}
      >
        {messageText}
      </p>
    </div>
  );
};

export default LeftMessageBlock;
