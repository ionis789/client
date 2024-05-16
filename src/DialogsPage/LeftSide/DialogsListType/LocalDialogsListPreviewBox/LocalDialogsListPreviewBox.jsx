import React from "react";
import DialogAvatarPreview from "../DialogAvatarPreview/DialogAvatarPreview.jsx";
import defaultUserImg from "../../../../assets/default_user_img.svg";

const LocalDialogsListPreviewBox = ({
  allRoomsData,
  selectRoom,
  selectedRoomID,
}) => {
  return (
    <div>
      {!allRoomsData.isEmpty &&
        allRoomsData.map((r) => (
          <div
            onClick={() => selectRoom(r.roomID)}
            key={r.roomID}
            className={
              selectedRoomID === r.roomID
                ? "bg-blue-400  p-2 mb-2 transition duration-300 hover:cursor-pointer  "
                : "hover:bg-neutral-500  p-2 mb-2 transition duration-300 hover:cursor-pointer"
            }
          >
            <div className={"flex items-center gap-3"}>
              <DialogAvatarPreview
                defaultUserImg={
                  r.userCompanionInfo.photoURL
                    ? r.userCompanionInfo.photoURL
                    : defaultUserImg
                }
              />
              <div>
                <p
                  className={
                    selectedRoomID === r.roomID
                      ? "font-semibold text-md text-gray-950"
                      : " font-semibold text-md"
                  }
                >
                  {r.userCompanionInfo.user_name}
                </p>

                {r.messages.length > 0 ? (
                  <p
                    className={
                      selectedRoomID === r.roomID
                        ? "font-regular text-md text-black transition duration-300"
                        : " font-regular text-md"
                    }
                  >
                    {r.messages[r.messages.length - 1].message_text.length > 15
                      ? r.messages[
                          r.messages.length - 1
                        ].message_text.substring(0, 15) + "..."
                      : r.messages[r.messages.length - 1].message_text}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LocalDialogsListPreviewBox;
