import React from "react";
import ConversationContainer from "./Conversation/ConversationContainer.jsx";
const RightSide = ({ sideWidth }) => {
  return (
    <>
      <ConversationContainer sideWidth={sideWidth} />
    </>
  );
};

export default RightSide;
