import React from "react";
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
      Send
    </button>
  );
};

export default SendButton;
