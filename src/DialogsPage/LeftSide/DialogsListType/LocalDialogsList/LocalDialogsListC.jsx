import { useEffect } from "react";
import LocalDialogsListPreviewBox from "../LocalDialogsListPreviewBox/LocalDialogsListPreviewBox.jsx";
import { connect } from "react-redux";
import { getRoomsTC } from "../../../../redux/reducers/rooms.js";
import { selectRoom } from "../../../../redux/reducers/rooms.js";
import { io } from "../../../../services/socket.js";
const LocalDialogsListC = ({
  getRoomsTC,
  allRoomsData,
  selectRoom,
  selectedRoomID,
}) => {
  useEffect(() => {
    const allRoomIDs = allRoomsData.map((r) => r.roomID);
    io.emit("join_room", allRoomIDs); // subscribe connected user with his socket.id to his rooms
    getRoomsTC(); // on componentMount and changed rooms count, I request all rooms from server
    io.on("new_room", (response) => {
      if (response.status === 1) {
        getRoomsTC();
      } else if (response.status === 0) {
        console.log("Error while creating room");
      }
    });
  }, [allRoomsData.length]);

  return (
    <>
      <LocalDialogsListPreviewBox
        allRoomsData={allRoomsData}
        selectRoom={selectRoom}
        selectedRoomID={selectedRoomID}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allRoomsData: state.rooms.allRoomsData,
    selectedRoomID: state.rooms.selectedRoomID,
  };
};

export default connect(mapStateToProps, { getRoomsTC, selectRoom })(
  LocalDialogsListC,
);
