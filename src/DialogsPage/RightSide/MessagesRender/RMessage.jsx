import React from "react";
import RightMessageBlock from "./RightMessageBlock.jsx";

const RMessage = ({ messageText }) => {
  return (
    <div className={"flex justify-end"}>
      <RightMessageBlock messageText={messageText} />
    </div>
  );
};

export default RMessage;
