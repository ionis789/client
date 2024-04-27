import React from "react";
import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.jsx";
import SendButton from "./SendButton.jsx";

const BottomMenu = ({
  messageInputText,
  sendMessageTC,
  changeMessage,
  selectedRoomID,
  senderID,
}) => {
  return (
    <div
      className={
        " flex justify-between items-center  bg-neutral-800 rounded-bl-3xl"
      }
    >
      <MessageInputArea
        messageInputText={messageInputText}
        changeMessage={changeMessage}
      />
      <SendButton
        sendMessageTC={sendMessageTC}
        selectedRoomID={selectedRoomID}
        senderID={senderID}
        messageInputText={messageInputText}
      />
    </div>
  );
};

export default BottomMenu;
