import React from "react";

const MessageInputArea = ({ messageInputText, changeMessage }) => {
  const handleTextAreaChange = (e) => {
    changeMessage(e.target.value);
  };

  return (
    <div className="w-full ">
      <textarea
        className="bg-neutral-800 w-full   border-t-neutral-500  focus:outline-none focus:border-t-neutral-300 resize-none  "
        value={messageInputText}
        placeholder={"Message"}
        type={"text"}
        onChange={handleTextAreaChange}
      />
    </div>
  );
};

export default MessageInputArea;
