import React, { useEffect, useMemo, useRef } from "react";
import RMessage from "./RMessage.jsx";
import LMessage from "./LMessage.jsx";
const MessagesRender = ({ messages, userCompanionID, sideWidth }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    debugger;
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
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
      className={"overflow-y-auto fixed top-16 bottom-16 w-full  bg-black "}
      style={{ width: `calc(100vw - ${sideWidth}px)` }}
    >
      {messagesComponents}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessagesRender;
