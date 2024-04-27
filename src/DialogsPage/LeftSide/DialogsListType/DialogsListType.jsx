import React from "react";
import LocalDialogsListC from "./LocalDialogsList/LocalDialogsListC.jsx";
import GlobalDialogsListC from "./GlobalDialogsList/GlobalDialogsListC.jsx";

const DialogsListType = ({ isFocus }) => {
  return <>{isFocus ? <GlobalDialogsListC /> : <LocalDialogsListC />}</>;
};

export default DialogsListType;
