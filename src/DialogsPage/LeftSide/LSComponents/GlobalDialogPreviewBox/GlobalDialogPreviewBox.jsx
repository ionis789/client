import React from "react";
import DialogAvatarPreview from "../DialogAvatarPreview/DialogAvatarPreview.jsx";
import { useNavigate } from "react-router-dom";
const GlobalDialogPreviewBox = ({
  updatedUsers,
  defaultUserImg,
  initiatePotentialRoomTC,
  selectedGlobalUserID,
}) => {
  return (
    <div>
      {!updatedUsers.isEmpty ? (
        updatedUsers.map((d) => (
          <div
            onClick={() => initiatePotentialRoomTC(d.user_id, d.user_name)}
            key={d.user_id}
            className={
              selectedGlobalUserID === d.user_id
                ? "bg-blue-400  p-2 mb-2 transition duration-300 hover:cursor-pointer  "
                : "hover:bg-neutral-600  p-2 mb-2 transition duration-300 hover:cursor-pointer"
            }
          >
            <div className={"flex justify-between items-center"}>
              <div className={"flex gap-3 items-center"}>
                <DialogAvatarPreview
                  id={d.user_id}
                  defaultUserImg={d.photoURL ? d.photoURL : defaultUserImg}
                />
                <p className={"font-semibold text-lg"}>{d.user_name}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GlobalDialogPreviewBox;
