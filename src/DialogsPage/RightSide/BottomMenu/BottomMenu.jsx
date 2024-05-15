import React from "react";
import MessageInputArea from "../../../ReusableComponnets/MessageInputArea.jsx";
import SendButton from "./SendButton.jsx";

const BottomMenu = ({
  messageInputText,
  sendMessageTC,
  changeMessage,
  selectedRoomID,
  senderID,
  sideMenuWidth,
}) => {
  return (
    <div className={"flex h-20 items-center justify-center"}>
      <div
        className={
          "pl-4 pr-4 fixed h-20 bottom-0 flex items-center justify-center gap-4"
        }
        style={{ width: `calc(100vw - ${sideMenuWidth}px)` }}
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
    </div>
  );
};

export default BottomMenu;
