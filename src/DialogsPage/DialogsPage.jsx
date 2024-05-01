import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect, useDispatch } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";
const DialogsPage = ({ selectedRoomID }) => {
  const [showConversation, setShowConversation] = useState(true);
  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    const threshold = 768;
    if (screenWidth < threshold) setShowConversation(false);
    // will show dialogs list if width os screen >= 768 px
    else setShowConversation(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserData());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth(); // Apelează handleResize inițial pentru a seta starea la încărcarea paginii
    console.log(selectedRoomID);
  }, [showConversation]);
  return showConversation ? (
    <div className="grid grid-cols-[3fr,7fr] h-screen bg-neutral-800 ">
      <LeftSide />
      <RightSide />
    </div>
  ) : selectedRoomID == null ? (
    <div className=" h-screen bg-neutral-800 ">
      <LeftSide />
    </div>
  ) : (
    <RightSide />
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRoomID: state.rooms.selectedRoomID,
  };
};

export default connect(mapStateToProps)(DialogsPage);
