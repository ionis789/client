import React from "react";
import { SlOptions } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import SearchBox from "../../SearchBox/SearchBox.jsx";

const NavState = ({
  handleFocus,
  isFocus,
  searchText,
  setSearchText,
  eraseUsersTC,
}) => {
  return (
    <div className=" flex justify-between items-center gap-4 m-4 h-14 ">
      {isFocus ? (
        <FaArrowLeft
          onClick={() => eraseUsersTC()}
          size={"18px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      ) : (
        <SlOptions
          size={"20px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      )}
      {/*if it's not on focus searchText will be removed*/}

      <SearchBox
        handleFocus={handleFocus}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
};

export default NavState;
