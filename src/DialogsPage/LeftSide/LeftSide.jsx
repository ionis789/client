import React, { useEffect, useState } from "react";
import TopMenuC from "./TopMenu/TopMenuC.jsx";
import { connect } from "react-redux";
import DialogsListType from "./DialogsListType/DialogsListType.jsx";
import { io } from "../../services/socket.js";
import { receivedMessageTC } from "../../redux/reducers/messages.js";

const LeftSide = ({ isFocus, receivedMessageTC, showConversation }) => {
  const [socketID, setSocketID] = useState(null);
  useEffect(() => {
    // o sa arate in top menu id-ul socket-ului al user-ului curent logat, ca sa lucreze trebuie sa dau props lui topMenuC socketID
    // io.on("connect", () => {
    //   setSocketID(io.id);
    // });
    io.on("new_message", (messagePayLoad) => {
      receivedMessageTC(messagePayLoad);
    });
  }, []);

  return (
    <div className=" rounded-br-3xl overflow-hidden relative">
      <TopMenuC isFocus={isFocus} />
      <div className="overflow-auto h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800 bg-neutral-800">
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

export default connect(mapStateToProps, {
  receivedMessageTC,
})(LeftSide);
