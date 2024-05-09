import React, { useEffect, useState } from "react";
import { GrSend } from "react-icons/gr";
const SendButton = ({
  sendMessageTC,
  senderID,
  selectedRoomID,
  messageInputText,
}) => {
  useEffect(() => {
    const keyEnterPress = (event) => {
      event.keyCode === 13 &&
        messageInputText &&
        sendMessageTC(selectedRoomID, senderID, messageInputText);
    };
    document.addEventListener("keydown", keyEnterPress);
    return () => {
      document.removeEventListener("keydown", keyEnterPress);
    };
  }, [messageInputText]);
  return (
    <button
      onClick={() => sendMessageTC(selectedRoomID, senderID, messageInputText)}
    >
      <GrSend size={"24px"} />
    </button>
  );
};

export default SendButton;
