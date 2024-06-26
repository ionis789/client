import React, { useEffect, useMemo, useRef } from "react";
import RMessage from "./RMessage.jsx";
import LMessage from "./LMessage.jsx";
const MessagesRender = ({ messages, userCompanionID, conversationWidth }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages.length, messages]);
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
      className={"overflow-auto flex-1"}
      style={{ width: `${conversationWidth}px)` }}
    >
      {messagesComponents}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessagesRender;
