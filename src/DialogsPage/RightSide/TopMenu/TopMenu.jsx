import React from "react";
import DialogAvatarPreview from "../../LeftSide/LSComponents/DialogAvatarPreview/DialogAvatarPreview.jsx";
import defaultUserImg from "../../../assets/default_user_img.svg";
import { FaArrowLeft } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
const TopMenu = ({ userCompanionInfo, selectRoom, sideWidth }) => {
  return (
    <div
      className={"fixed top-0 h-16 flex justify-around items-center"}
      style={{ width: `calc(100vw - ${sideWidth}px)` }}
    >
      <FaArrowLeft
        onClick={() => selectRoom(null)}
        size={"20px"}
        className="hover: cursor-pointer hover:opacity-80 transition duration-200"
      />
      <div className={"flex items-center justify-center"}>
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
      <div className={"flex items-center justify-center gap-6"}>
        <LuPhone size={"24px"} />
        <LuVideo size={"24px"} />
      </div>
      <div>
        <LuSettings2 size={"24px"} />
      </div>
    </div>
  );
};

export default TopMenu;
