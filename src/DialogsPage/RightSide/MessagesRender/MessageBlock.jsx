import React from "react";

const MessageBlock = ({ messageText }) => {
  return (
    <div
      className={"bg-neutral-600 p-2 m-4 rounded-xl"}
      style={{ maxWidth: "70%" }}
    >
      <p className={"text-lg font-normal"} style={{ wordWrap: "break-word" }}>
        {messageText}
      </p>
    </div>
  );
};

export default MessageBlock;
