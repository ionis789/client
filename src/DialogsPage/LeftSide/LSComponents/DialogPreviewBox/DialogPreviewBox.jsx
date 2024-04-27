import React from "react";
import DialogAvatarPreview from "../DialogAvatarPreview/DialogAvatarPreview.jsx";
import defaultUserImg from "../../../../assets/default_user_img.svg";

const DialogPreviewBox = ({ allRoomsData, selectRoom, selectedRoomID }) => {
  return (
    <div>
      {!allRoomsData.isEmpty &&
        allRoomsData.map((r) => (
          <div
            onClick={() => selectRoom(r.roomID)}
            key={r.roomID}
            className={
              selectedRoomID === r.roomID
                ? `p-2 mb-2 hover: cursor-pointer bg-blue-500`
                : `p-2 mb-2 hover: cursor-pointer hover:bg-neutral-600 transition duration-200 `
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
                <p className={" font-semibold text-lg"}>
                  {r.userCompanionInfo.user_name}
                </p>

                {r.messages.length > 0 ? (
                  <p className={"font-light"}>
                    {r.messages[r.messages.length - 1].message_text}
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

export default DialogPreviewBox;
