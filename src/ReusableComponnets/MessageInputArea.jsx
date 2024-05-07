import React from "react";

const MessageInputArea = ({ messageInputText, changeMessage }) => {
  const handleTextAreaChange = (e) => {
    changeMessage(e.target.value);
  };

  return (
    <div className="relative w-full h-full">
      <input
        className="h-full appearance-none bg-neutral-700 text-amber-50 rounded-lg w-full p-4 leading-tight focus:outline-none focus:bg-black"
        value={messageInputText}
        placeholder="Message"
        type="text"
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default MessageInputArea;
