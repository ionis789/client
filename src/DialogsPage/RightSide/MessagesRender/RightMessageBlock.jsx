import React from "react";

const LeftMessageBlock = ({ messageText }) => {
  return (
    <div
      className={"p-2 m-4 mr-6 rounded-xl bg-neutral-500"}
      style={{ maxWidth: "70%" }}
    >
      <p
        className={"text-md font-regular opacity-100"}
        style={{ wordWrap: "break-word" }}
      >
        {messageText}
      </p>
    </div>
  );
};

export default LeftMessageBlock;
