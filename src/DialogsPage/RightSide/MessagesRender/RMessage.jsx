import React from "react";
import MessageBlock from "./MessageBlock.jsx";

const RMessage = ({ messageText }) => {
  return (
    <div className={"flex justify-end"}>
      <MessageBlock messageText={messageText} />
    </div>
  );
};

export default RMessage;
