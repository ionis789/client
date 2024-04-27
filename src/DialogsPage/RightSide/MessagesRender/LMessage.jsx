import React from "react";
import MessageBlock from "./MessageBlock.jsx";

const LMessage = ({ messageText }) => {
  return (
    <div className={"flex"}>
      <MessageBlock messageText={messageText} />
    </div>
  );
};

export default LMessage;
