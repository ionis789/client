import React from "react";
import TopMenuC from "./TopMenu/TopMenuC.jsx";
import { connect } from "react-redux";
import DialogsListType from "./DialogsListType/DialogsListType.jsx";
const LeftSide = ({ isFocus }) => {
  return (
    <>
      <TopMenuC isFocus={isFocus} className={"sticky"} />
      <DialogsListType isFocus={isFocus} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFocus: state.search.isFocus,
  };
};

export default connect(mapStateToProps, {})(LeftSide);
