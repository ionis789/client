import React from "react";
import { GrSend } from "react-icons/gr";
const SendButton = ({
  sendMessageTC,
  senderID,
  selectedRoomID,
  messageInputText,
}) => {
  return (
    <button
      onClick={() => {
        sendMessageTC(selectedRoomID, senderID, messageInputText);
      }}
    >
      <GrSend size={"24px"} />
    </button>
  );
};

export default SendButton;
