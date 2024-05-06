import React from "react";
import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.jsx";
import SendButton from "./SendButton.jsx";

const BottomMenu = ({
  messageInputText,
  sendMessageTC,
  changeMessage,
  selectedRoomID,
  senderID,
  sideWidth,
}) => {
  return (
    <div
      className={"bottom-0 fixed h-16  flex items-center justify-center"}
      style={{ width: `calc(100vw - ${sideWidth}px)` }}
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
