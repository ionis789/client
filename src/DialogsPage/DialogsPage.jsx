import React, { useEffect } from "react";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";
import { connect, useDispatch } from "react-redux";
import { loadUserData } from "../redux/reducers/auth.js";

const DialogsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserData());
  }, []);

  return (
    <div className="grid grid-cols-[4fr,7fr] h-screen bg-neutral-800 ">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default DialogsPage;
