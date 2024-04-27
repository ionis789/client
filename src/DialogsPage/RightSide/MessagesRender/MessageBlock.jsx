import React from "react";

const MessageBlock = ({ messageText }) => {
  return (
    <div className={"bg-neutral-600 p-2  m-4 rounded-xl "}>
      <p className={"text-lg font-semibold"}>{messageText}</p>
    </div>
  );
};

export default MessageBlock;
