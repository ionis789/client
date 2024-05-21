import React, { useEffect, useRef } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
import { io } from "../services/socket.js";
import { receivedMessageTC } from "../redux/reducers/messages.js";
import { WithAuth } from "../hoc/WithAuth.jsx";
import { updateRoomsTC, getRoomsTC } from "../redux/reducers/rooms.js";
import { adaptWidthTC } from "../redux/reducers/visualState.js";
const DialogsPage = ({
  selectedRoomID,
  selectedGlobalUserID,
  receivedMessageTC,
  deviceView,
  allRoomsData,
  updateRoomsTC,
  adaptWidthTC,
  getRoomsTC,
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const allRoomIDs = allRoomsData.map((r) => r.roomID);
    io.emit("join_room", allRoomIDs); // subscribe connected user with his socket.id to his rooms
    getRoomsTC(); // on componentMount and changed rooms count, I request all rooms from server
    io.on("new_room", (response) => {
      if (response.status === 1) {
        const newRoomID = response.newRoomData.roomID;
        updateRoomsTC(response.newRoomData, newRoomID);
      } else if (response.status === 0) {
        console.log("Error while creating room", response.error);
      }
    });
  }, [allRoomsData.length]);

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
    if (elementRef.current) {
      const leftSideWidth = elementRef.current.getBoundingClientRect().width;
      const handleResize = () => {
        adaptWidthTC(window.innerWidth, leftSideWidth);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  if (deviceView === "deskView") {
    return (
      <div className="grid grid-cols-[3fr,8fr] h-screen w-screen">
        <div
          ref={elementRef}
          className={`overflow-y-auto shadow-[0_5px_13px_rgba(8,_112,_184,_0.7)]`}
        >
          <LeftSide />
        </div>
        <RightSide />
      </div>
    );
  } else if (deviceView === "mobileView") {
    return selectedRoomID === null && selectedGlobalUserID === null ? (
      <div ref={elementRef} className=" max-h-full bg-black  ">
        <LeftSide />
      </div>
    ) : selectedRoomID !== null || selectedGlobalUserID !== null ? (
      <RightSide />
    ) : (
      <div>Wait...</div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedRoomID: state.rooms.selectedRoomID,
    selectedGlobalUserID: state.rooms.selectedGlobalUserID,
    deviceView: state.visualState.deviceView,
    allRoomsData: state.rooms.allRoomsData,
  };
};

export default connect(mapStateToProps, {
  receivedMessageTC,
  loadUserData,
  updateRoomsTC,
  getRoomsTC,
  adaptWidthTC,
})(WithAuth(DialogsPage));
