import React, { useMemo } from "react";
import RMessage from "./RMessage.jsx";
import LMessage from "./LMessage.jsx";
const MessagesRender = ({ messages, userCompanionID }) => {
  const messagesComponents = useMemo(() => {
    return messages.map((m) => {
      if (m.sender_id === userCompanionID)
        return (
          <div key={m.message_id}>
            <LMessage messageText={m.message_text} />
          </div>
        );

      return (
        <div key={m.message_id}>
          <RMessage messageText={m.message_text} />
        </div>
      );
    });
  }, [messages, messages.length]);
  return (
    <div
      className={"overflow-y-auto absolute top-16 bottom-16 w-full  bg-black "}
    >
      {messagesComponents}
    </div>
  );
};

export default MessagesRender;
