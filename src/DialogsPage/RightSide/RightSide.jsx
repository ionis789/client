import React from "react";
import ConversationContainer from "./Conversation/ConversationContainer.jsx";
const RightSide = ({ sideMenuWidth }) => {
  return (
    <>
      <ConversationContainer sideMenuWidth={sideMenuWidth} />
    </>
  );
};

export default RightSide;
