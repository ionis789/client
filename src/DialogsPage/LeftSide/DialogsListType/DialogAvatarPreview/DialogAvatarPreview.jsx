import React from "react";

const DialogAvatarPreview = ({ defaultUserImg }) => {
  return (
    <div className={"hover:cursor-pointer"}>
      <img
        alt={"user photo"}
        src={defaultUserImg}
        className={"w-12 h-12 rounded-xl"}
      />
    </div>
  );
};

export default DialogAvatarPreview;
