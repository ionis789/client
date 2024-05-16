import React from "react";

const SearchBox = ({ handleFocus, searchText, setSearchText }) => {
  return (
    <div className="w-full ">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => handleFocus(true)}
        value={searchText}
        type="text"
        placeholder={"search"}
        className="bg-amber-50 text-gray-900  w-full px-3 py-2 font-semibold rounded-xl border-none ring-blue-400 focus:ring-4 focus:outline-none focus:placeholder:opacity-0 hover:ring-2 transition duration-300"
      />
    </div>
  );
};

export default SearchBox;
