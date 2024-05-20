import React, { useEffect, useRef } from "react";
import TopMenuC from "./TopMenu/TopMenuC.jsx";
import { connect } from "react-redux";
import DialogsListType from "./DialogsListType/DialogsListType.jsx";
import { adaptWidthTC } from "../../redux/reducers/visualState.js";
const LeftSide = ({ isFocus, adaptWidthTC }) => {
  const elementRef = useRef(null);
  // first width checking and after only on resize event

  return (
    <div ref={elementRef}>
      <TopMenuC isFocus={isFocus} />
      <DialogsListType isFocus={isFocus} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFocus: state.search.isFocus,
  };
};

export default connect(mapStateToProps, { adaptWidthTC })(LeftSide);
