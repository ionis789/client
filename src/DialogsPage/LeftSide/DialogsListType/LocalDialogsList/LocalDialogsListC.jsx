import LocalDialogsListPreviewBox from "../LocalDialogsListPreviewBox/LocalDialogsListPreviewBox.jsx";
import { connect } from "react-redux";
import { selectRoom } from "../../../../redux/reducers/rooms.js";
const LocalDialogsListC = ({ allRoomsData, selectRoom, selectedRoomID }) => {
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

export default connect(mapStateToProps, { selectRoom })(LocalDialogsListC);
