import React from "react";

const DialogAvatarPreview = ({ defaultUserImg }) => {
  return (
    <div className={"hover:cursor-pointer"}>
      <img
        src={defaultUserImg}
        className={" rounded-xl  w-14 h-14 rounded-xl"}
      />
    </div>
  );
};

export default DialogAvatarPreview;
