import React from "react";

const MessageInputArea = ({ messageInputText, changeMessage }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <input
        className=" bg-neutral-800 rounded-xl appearance-none text-amber-50  w-full p-2 leading-tight focus:outline-none "
        value={messageInputText}
        placeholder="Message..."
        type="text"
        onChange={(e) => changeMessage(e.target.value)}
      />
    </div>
  );
};

export default MessageInputArea;
