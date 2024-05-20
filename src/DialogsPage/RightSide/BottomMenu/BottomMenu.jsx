import React from "react";
import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.jsx";
import SendButton from "./SendButton.jsx";

const BottomMenu = ({
  messageInputText,
  sendMessageTC,
  changeMessage,
  selectedRoomID,
  senderID,
  conversationWidth,
}) => {
  return (
    <div
      className={
        "pl-4 pr-4 md:sticky bottom-0 flex items-center justify-center gap-4 m-4"
      }
      style={{ width: `${conversationWidth}px)` }}
    >
      <MessageInputArea
        conversationWidth={conversationWidth}
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
