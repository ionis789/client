import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalDialogPreviewBox from "./GlobalDialogPreviewBox.jsx";
import defaultUserImg from "../../../../assets/default_user_img.svg";
import { initiatePotentialRoomTC } from "../../../../redux/reducers/rooms.js";
class GlobalDialogPreviewBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalDialogPreviewBox
          initiatePotentialRoomTC={this.props.initiatePotentialRoomTC}
          updatedUsers={this.props.updatedUsers}
          defaultUserImg={defaultUserImg}
          selectedGlobalUserID={this.props.selectedGlobalUserID}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    updatedUsers: state.users.usersData,
    selectedGlobalUserID: state.rooms.selectedGlobalUserID,
  };
};

export default connect(mapStateToProps, { initiatePotentialRoomTC })(
  GlobalDialogPreviewBoxContainer,
);
