import { connect } from "react-redux";
import BottomMenu from "./BottomMenu.jsx";
import {
  changeMessage,
  sendMessageTC,
} from "../../../redux/reducers/messages.js";

const BottomMenuContainer = ({
  messageInputText,
  sendMessageTC,
  senderID,
  selectedRoomID,
  changeMessage,
  sideWidth,
}) => {
  return (
    <>
      <BottomMenu
        sideWidth={sideWidth}
        sendMessageTC={sendMessageTC}
        messageInputText={messageInputText}
        changeMessage={changeMessage}
        senderID={senderID}
        selectedRoomID={selectedRoomID}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    senderID: state.auth.loggedUserID,
    selectedRoomID: state.rooms.selectedRoomID,
    messageInputText: state.messagesSender.messageInputText,
  };
};

export default connect(mapStateToProps, {
  sendMessageTC,
  changeMessage,
})(BottomMenuContainer);
