const HANDLE_FOCUS = "HANDLE_FOCUS";
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
const defaultState = {
  isFocus: false,
  searchText: "",
};

const Search = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_FOCUS: {
      return {
        ...state,
        isFocus: action.focusState,
      };
    }

    case SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
      };
    }

    default:
      return state;
  }
};

export const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});
export const handleFocus = (focusState) => ({
  type: HANDLE_FOCUS,
  focusState,
});

export default Search;
