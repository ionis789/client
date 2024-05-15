import React, { useEffect } from "react";
import { connect } from "react-redux";
import GlobalDialogsList from "./GlobalDialogsList.jsx";
import Preloader from "../../../../ReusableComponnets/Preloader/Preloader.jsx";
import {
  getMatchedUsers,
  initiatePotentialRoomTC,
} from "../../../../redux/reducers/rooms.js";
import defaultUserImg from "../../../../assets/default_user_img.svg";
const GlobalDialogsListC = ({
  isFetching,
  searchText,
  getMatchedUsers,
  allRoomsData,
  initiatePotentialRoomTC,
  updatedUsers,
  selectedGlobalUserID,
}) => {
  useEffect(() => {
    const avoidUsers = allRoomsData.map(
      (room) => room.userCompanionInfo.user_name,
    );
    getMatchedUsers(searchText, avoidUsers);
  }, [searchText]);
  return (
    <>
      {isFetching ? (
        <div className={"flex justify-center items-center"}>
          <Preloader />
        </div>
      ) : (
        <GlobalDialogsList
          defaultUserImg={defaultUserImg}
          initiatePotentialRoomTC={initiatePotentialRoomTC}
          updatedUsers={updatedUsers}
          selectedGlobalUserID={selectedGlobalUserID}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.preloader.isFetching,
    searchText: state.search.searchText,
    allRoomsData: state.rooms.allRoomsData,
    updatedUsers: state.users.usersData,
    selectedGlobalUserID: state.rooms.selectedGlobalUserID,
  };
};

export default connect(mapStateToProps, {
  getMatchedUsers,
  initiatePotentialRoomTC,
})(GlobalDialogsListC);
