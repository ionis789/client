import React from "react";
import TopMenuC from "./TopMenu/TopMenuC.jsx";
import { connect } from "react-redux";
import DialogsListType from "./DialogsListType/DialogsListType.jsx";
import S from "../S.module.css";
const LeftSide = ({ isFocus }) => {
  return (
    <div className={`overflow-hidden ${S.child}`}>
      <TopMenuC isFocus={isFocus} />
      <div className="overflow-auto h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800 bg-black">
        <DialogsListType isFocus={isFocus} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFocus: state.search.isFocus,
  };
};

export default connect(mapStateToProps, {})(LeftSide);
