import React from "react";
import TopMenu from "../TopMenu/TopMenu.jsx";
import MessagesRender from "../MessagesRender/MessagesRender.jsx";
import BottomMenuContainer from "../BottomMenu/BottomMenuContainer.jsx";
const Conversation = ({
  loggedUserID,
  selectedRoomData,
  selectedRoomID,
  potentialRoom,
  createRoomTC,
  selectRoom,
  isFocus,
  conversationWidth,
}) => {
  return (
    <>
      {/*daca este un utilizator cu care am un room*/}
      {selectedRoomID && !potentialRoom.isInitiateConversation ? (
        <div className={"h-screen flex flex-col"}>
          <TopMenu
            conversationWidth={conversationWidth}
            userCompanionInfo={selectedRoomData.userCompanionInfo}
            selectRoom={selectRoom}
          />

          {/*Right side view chose */}
          {!selectedRoomData.messages.isEmpty ? (
            <MessagesRender
              conversationWidth={conversationWidth}
              messages={selectedRoomData.messages}
              userCompanionID={selectedRoomData.userCompanionInfo.user_id}
            />
          ) : (
            <div
              className={
                "flex items-center justify-center h-full bg-black rounded-bl-xl rounded-tl-xl"
              }
            >
              <h1 className={"font-bold text-3xl"}>No messages yet</h1>
            </div>
          )}

          <BottomMenuContainer conversationWidth={conversationWidth} />
        </div>
      ) : potentialRoom.isInitiateConversation ? (
        <div className={"flex flex-col justify-center items-center h-screen"}>
          <p className={"text-3xl font-semibold"}>
            Start new dialog with {potentialRoom.userCompanionName} ?
          </p>
          <br />
          <button
            className={
              "text-2xl font-medium hover:text-blue-400 transition duration-300 "
            }
            onClick={() =>
              createRoomTC(loggedUserID, potentialRoom.userCompanionID)
            }
          >
            Start
          </button>
        </div>
      ) : isFocus ? (
        <div
          className={
            "text-3xl font-semibold flex justify-center items-center h-screen"
          }
        >
          Find a user
        </div>
      ) : (
        <div
          className={
            "text-3xl font-semibold flex justify-center items-center h-screen"
          }
        >
          Select dialog
        </div>
      )}
    </>
  );
};

export default Conversation;
