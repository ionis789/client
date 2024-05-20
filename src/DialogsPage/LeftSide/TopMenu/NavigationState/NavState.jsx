import React from "react";
import { SlOptions } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import SearchBox from "../../SearchBox/SearchBox.jsx";
import { LuSettings2 } from "react-icons/lu";
import { logOut } from "../../../../redux/reducers/auth.js";

const NavState = ({
  handleFocus,
  isFocus,
  searchText,
  setSearchText,
  eraseUsersTC,
  logOut,
}) => {
  const [settings, setSettings] = React.useState(false);
  const handleSettings = () => {
    setSettings(!settings);
  };
  return (
    <div className=" flex justify-between items-center gap-4 m-4 h-14 ">
      {isFocus ? (
        <FaArrowLeft
          onClick={() => eraseUsersTC()}
          size={"18px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      ) : (
        <LuSettings2
          onClick={handleSettings}
          size={"24px"}
          className="hover: cursor-pointer hover:opacity-80 transition duration-200"
        />
      )}
      {/*if it's not on focus searchText will be removed*/}

      <SearchBox
        handleFocus={handleFocus}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {settings && (
        <div className={"absolute top-0"}>
          <button onClick={() => logOut()}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default NavState;
