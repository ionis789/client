import React from "react";
import { connect } from "react-redux";
import { handleFocus, setSearchText } from "../../../redux/reducers/search.js";
import NavState from "./NavigationState/NavState.jsx";
import { eraseUsersTC } from "../../../redux/reducers/users.js";

const TopMenuC = ({
  handleFocus,
  isFocus,
  eraseUsersTC,
  searchText,
  setSearchText,
}) => {
  return (
    <div>
      <NavState
        handleFocus={handleFocus}
        isFocus={isFocus}
        eraseUsersTC={eraseUsersTC}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
};

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
