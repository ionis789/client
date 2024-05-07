import React from "react";
import TopMenu from "../TopMenu/TopMenu.jsx";
import MessagesRender from "../MessagesRender/MessagesRender.jsx";
import BottomMenuContainer from "../BottomMenu/BottomMenuContainer.jsx";
const Conversation = ({
  loggedUserID,
  allRoomsData,
  selectedRoomID,
  potentialRoom,
  createRoomTC,
  selectRoom,
  sideWidth,
}) => {
  const selectedRoomData = allRoomsData.filter(
    (r) => r.roomID === selectedRoomID,
  );
  return (
    <>
      {/*daca este un utilizator cu care am un room*/}
      {selectedRoomID && !potentialRoom.isInitiateConversation ? (
        <div className={"relative h-full flex flex-col"}>
          <TopMenu
            sideWidth={sideWidth}
            userCompanionInfo={selectedRoomData[0].userCompanionInfo}
            selectRoom={selectRoom}
          />

          {/*Right side view chose */}
          {!selectedRoomData[0].messages.isEmpty ? (
            <MessagesRender
              sideWidth={sideWidth}
              messages={selectedRoomData[0].messages}
              userCompanionID={selectedRoomData[0].userCompanionInfo.user_id}
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

          <BottomMenuContainer sideWidth={sideWidth} />
        </div>
      ) : potentialRoom.isInitiateConversation ? (
        <div className={" flex  flex-col justify-center items-center h-full"}>
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
      ) : (
        <div
          className={
            "text-3xl font-semibold flex justify-center items-center h-full"
          }
        >
          Select dialog
        </div>
      )}
    </>
  );
};

export default Conversation;
