import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import { io } from "../services/socket.js";
import { receivedMessageTC } from "../redux/reducers/messages.js";
import S from "./S.module.css";

const DialogsPage = ({ selectedRoomID, receivedMessageTC, loadUserData }) => {
  const [showConversation, setShowConversation] = useState(true);
  const [sideMenuWidth, setSideMenuWidth] = useState(null);
  const elementRef = useRef(null);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    const minWidth = 768;
    // It will show both sides, dialogs list and conversation if device screen width >= 768 px or hide conversation if width < 768px
    screenWidth < minWidth
      ? setShowConversation(false)
      : setShowConversation(true);
    //In case I have side dialogs list(it means screen width >= 768px) I will have a valid elementRef.current, it means I need now stable the conversation width by cut from all screen width the side dialogs list.
    //I need to do that because the topMenu and bottomMenu of Conversation have a fixed class, so they are cut from dom and their width:full will be a full width of device screen not remaining part.
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setSideMenuWidth(rect.width);
    } else setSideMenuWidth(0);
  };

  // first width checking and after only on resize event
  useEffect(() => {
    checkScreenWidth();
  }, []);
  // new message event
  useEffect(() => {
    debugger;
    let subscribe = true;
    io.on("new_message", (messagePayLoad) => {
      if (subscribe) receivedMessageTC(messagePayLoad);
    });
    return () => {
      subscribe = false;
      io.disconnect();
    };
  }, []);
  // modify screen width on resize event
  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return showConversation ? (
    <div className="grid grid-cols-[3fr,8fr] h-screen w-screen ">
      <div
        ref={elementRef}
        className={`bg-black ${S.parent} rounded-br-2xl rounded-tr-2xl`}
      >
        <LeftSide />
      </div>

      <RightSide sideMenuWidth={sideMenuWidth} />
    </div>
  ) : showConversation === false && selectedRoomID == null ? (
    <div className=" max-h-full bg-black  ">
      <div ref={elementRef}>
        <LeftSide />
      </div>
    </div>
  ) : (
    <RightSide sideMenuWidth={0} />
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRoomID: state.rooms.selectedRoomID,
  };
};

export default connect(mapStateToProps, { receivedMessageTC, loadUserData })(
  DialogsPage,
);
