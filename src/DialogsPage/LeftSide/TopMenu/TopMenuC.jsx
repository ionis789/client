import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFocus, setSearchText } from "../../../redux/reducers/search.js";
import NavState from "./NavigationState/NavState.jsx";
import { eraseUsersTC } from "../../../redux/reducers/users.js";

class TopMenuC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavState
          handleFocus={this.props.handleFocus}
          isFocus={this.props.isFocus}
          eraseUsersTC={this.props.eraseUsersTC}
          searchText={this.props.searchText}
          setSearchText={this.props.setSearchText}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText,
  };
};

export default connect(mapStateToProps, {
  handleFocus,
  setSearchText,
  eraseUsersTC,
})(TopMenuC);
