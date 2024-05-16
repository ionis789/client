import React from "react";

const LeftMessageBlock = ({ messageText }) => {
  return (
    <div
      className={"p-2 m-4 ml-6 rounded-xl"}
      style={{ maxWidth: "70%", background: "rgb(255, 255, 255, 0.2)" }}
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
