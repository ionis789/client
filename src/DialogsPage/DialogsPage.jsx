import React, { useEffect, useRef, useState } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect, useDispatch } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import { io } from "../services/socket.js";
import { receivedMessageTC } from "../redux/reducers/messages.js";
const DialogsPage = ({ selectedRoomID, receivedMessageTC }) => {
  const dispatch = useDispatch();
  const [showConversation, setShowConversation] = useState(true);
  const [sideWidth, setSideWidth] = useState(250);
  const elementRef = useRef(null);

  const checkScreenWidth = () => {
    const width = window.innerWidth;
    const threshold = 768;
    if (width < threshold)
      setShowConversation(false); // will show dialogs list if screen width >= 768 px
    else setShowConversation(true);
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setSideWidth(rect.width);
    } else setSideWidth(0);
  };

  useEffect(() => {
    // io.on("connect", () => {
    //   setSocketID(io.id);
    // });
    let subscribe = true;
    io.on("new_message", (messagePayLoad) => {
      if (subscribe) receivedMessageTC(messagePayLoad);
    });
    return () => {
      subscribe = false;
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    checkScreenWidth();
    dispatch(loadUserData());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return showConversation ? (
    <div className="grid grid-cols-[3fr,7fr] h-screen w-screen bg-neutral-800 ">
      <div ref={elementRef}>
        <LeftSide />
      </div>

      <RightSide sideWidth={sideWidth} />
    </div>
  ) : showConversation === false && selectedRoomID == null ? (
    <div className=" max-h-full bg-neutral-800 ">
      <div ref={elementRef}>
        <LeftSide />
      </div>
    </div>
  ) : (
    <RightSide sideWidth={0} />
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRoomID: state.rooms.selectedRoomID,
  };
};

export default connect(mapStateToProps, { receivedMessageTC })(DialogsPage);
