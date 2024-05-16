import Conversation from "./Conversation.jsx";
import { connect } from "react-redux";
import { createRoomTC, selectRoom } from "../../../redux/reducers/rooms.js";
const ConversationContainer = ({
  potentialRoom,
  loggedUserID,
  selectedRoomID,
  createRoomTC,
  selectedRoomData,
  selectRoom,
  sideMenuWidth,
  isFocus,
}) => {
  return (
    <div>
      <Conversation
        isFocus={isFocus}
        sideMenuWidth={sideMenuWidth}
        selectRoom={selectRoom}
        selectedRoomData={selectedRoomData}
        selectedRoomID={selectedRoomID}
        loggedUserID={loggedUserID}
        potentialRoom={potentialRoom}
        createRoomTC={createRoomTC}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRoomData: state.rooms.selectedRoomData,
    selectedRoomID: state.rooms.selectedRoomID,
    potentialRoom: state.rooms.potentialRoom,
    loggedUserID: state.auth.loggedUserID,
    isFocus: state.search.isFocus,
  };
};

export default connect(mapStateToProps, {
  createRoomTC,
  selectRoom,
})(ConversationContainer);
