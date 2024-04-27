import Conversation from "./Conversation.jsx";
import { connect } from "react-redux";
import { createRoomTC } from "../../../redux/reducers/rooms.js";
const ConversationContainer = ({
  potentialRoom,
  loggedUserID,
  selectedRoomID,
  createRoomTC,
  allRoomsData,
}) => {
  return (
    <div className={" rounded-l-3xl border-l h-full "}>
      <Conversation
        allRoomsData={allRoomsData}
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
    allRoomsData: state.rooms.allRoomsData,
    selectedRoomID: state.rooms.selectedRoomID,
    potentialRoom: state.rooms.potentialRoom,
    loggedUserID: state.auth.loggedUserID,
  };
};

export default connect(mapStateToProps, {
  createRoomTC,
})(ConversationContainer);
