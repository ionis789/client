import React from "react";
import DialogAvatarPreview from "../../LeftSide/LSComponents/DialogAvatarPreview/DialogAvatarPreview.jsx";
import defaultUserImg from "../../../assets/default_user_img.svg";
const TopMenu = ({ userCompanionInfo, selectRoom }) => {
  return (
    <div
      className={
        "absolute w-full top-0 h-16 flex flex-grow items-center justify-center"
      }
    >
      <button onClick={() => selectRoom(null)}>
        <p className={"text-xl font-medium hover:text-blue-400"}>Back</p>
      </button>
      <div className={`flex justify-center gap-4 items-center`}>
        <DialogAvatarPreview
          defaultUserImg={
            userCompanionInfo.photoURL
              ? userCompanionInfo.photoURL
              : defaultUserImg
          }
        />
        <h3 className={"font-semibold text-xl p-2 "}>
          {userCompanionInfo.user_name}
        </h3>
      </div>
    </div>
  );
};

export default TopMenu;
