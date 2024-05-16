import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import { io } from "../services/socket.js";
import { receivedMessageTC } from "../redux/reducers/messages.js";
import { WithAuth } from "../hoc/WithAuth.jsx";
import { setShowedConversation } from "../redux/reducers/visualState.js";
const DialogsPage = ({
  selectedRoomID,
  selectedGlobalUserID,
  receivedMessageTC,
  isShowedConversation,
  setShowedConversation,
}) => {
  const [sideMenuWidth, setSideMenuWidth] = useState(null);
  const elementRef = useRef(null);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    const minWidth = 768;
    // It will show both sides, dialogs list and conversation if device screen width >= 768 px or hide conversation if width < 768px
    screenWidth < minWidth
      ? setShowedConversation(false)
      : setShowedConversation(true);
    //In case I have side dialogs list(it means screen width >= 768px) I will have a valid elementRef.current, it means I need now stable the conversation width by cut from all screen width the side dialogs list.
    //I need to do that because the topMenu and bottomMenu of Conversation have a fixed class, so they are cut from dom and their width:full will be a full width of device screen not remaining part.
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setSideMenuWidth(rect.width);
    } else setSideMenuWidth(0);
  };

  // first width checking and after only on resize event
  useEffect(() => {
    debugger;
    checkScreenWidth();
  }, []);
  // new message event
  useEffect(() => {
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

  return isShowedConversation ? (
    <div className="grid grid-cols-[3fr,8fr] h-screen w-screen">
      <div
        ref={elementRef}
        className={`rounded-br-2xl rounded-tr-2xl overflow-y-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
      >
        <LeftSide />
      </div>

      <RightSide sideMenuWidth={sideMenuWidth} />
    </div>
  ) : isShowedConversation === false &&
    selectedRoomID === null &&
    selectedGlobalUserID === null ? (
    <div className=" max-h-full bg-black  ">
      <div ref={elementRef}>
        <LeftSide />
      </div>
    </div>
  ) : isShowedConversation === false &&
    selectedRoomID === null &&
    selectedGlobalUserID !== null ? (
    <RightSide sideMenuWidth={0} />
  ) : (
    <RightSide sideMenuWidth={0} />
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRoomID: state.rooms.selectedRoomID,
    selectedGlobalUserID: state.rooms.selectedGlobalUserID,
    isShowedConversation: state.visualState.isShowedConversation,
  };
};

export default connect(mapStateToProps, {
  receivedMessageTC,
  loadUserData,
  setShowedConversation,
})(WithAuth(DialogsPage));
