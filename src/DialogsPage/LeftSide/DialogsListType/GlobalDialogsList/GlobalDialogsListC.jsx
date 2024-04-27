import React, { useEffect } from "react";
import { connect } from "react-redux";
import GlobalDialogsList from "./GlobalDialogsList.jsx";
import { setNewUsers } from "../../../../redux/reducers/users.js";
import { setFetching } from "../../../../redux/reducers/preloader.js";
import Preloader from "../../../../ReusableComponnets/Preloader/Preloader.jsx";
import { getMatchedUsers } from "../../../../redux/reducers/rooms.js";
const GlobalDialogsListC = ({
  isFetching,
  searchText,
  getMatchedUsers,
  allRoomsData,
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
        <GlobalDialogsList />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.preloader.isFetching,
    searchText: state.search.searchText,
    allRoomsData: state.rooms.allRoomsData,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setNewUsers: (usersData) => {
//       dispatch(setNewDialogs(dialogsData));
//     },
//   }
// };

export default connect(mapStateToProps, { getMatchedUsers })(
  GlobalDialogsListC,
);
