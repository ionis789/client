import React from "react";
import DialogAvatarPreview from "../../LeftSide/LSComponents/DialogAvatarPreview/DialogAvatarPreview.jsx";
import defaultUserImg from "../../../assets/default_user_img.svg";
const TopMenu = ({ userCompanionInfo }) => {
  return (
    <div className={"rounded-tl-3xl bg-neutral-800"}>
      <div className={`  flex justify-center gap-4 items-center`}>
        <div
          className={`  border-b-2  border-white hover:border-opacity-50 transition-colors duration-300 ease-in-out p-2 hover:cursor-pointer`}
        >
          <DialogAvatarPreview
            defaultUserImg={
              userCompanionInfo.photoURL
                ? userCompanionInfo.photoURL
                : defaultUserImg
            }
          />
        </div>
        <h3
          className={"font-semibold text-xl shadow-neutral-100 p-2 rounded-lg"}
        >
          {userCompanionInfo.user_name}
        </h3>
      </div>
    </div>
  );
};

export default TopMenu;
