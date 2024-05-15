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
                ? "bg-blue-500  p-2 mb-2 transition duration-300 hover:cursor-pointer  "
                : "hover:bg-neutral-600  p-2 mb-2 transition duration-300 hover:cursor-pointer"
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
                <p className={" font-semibold text-md"}>
                  {r.userCompanionInfo.user_name}
                </p>

                {r.messages.length > 0 ? (
                  <p className={"font-light"}>
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
