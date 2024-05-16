import { handleFocus, setSearchText } from "./search.js";
import { discardInitiateRoom, selectGlobalUser } from "./rooms.js";
const SET_NEW_USERS = "SET_NEW_USERS";
const ERASE_USERS = "ERASE_USERS";
let defaultState = {
  usersData: [
    // {
    //   user_name: null,
    //   user_id: null,
    //   photoURL: null,
    // },
  ],
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NEW_USERS: {
      return {
        ...state,
        usersData: action.usersData.map((d) => ({ ...d })),
      };
    }
    case ERASE_USERS: {
      return {
        ...state,
        usersData: [],
      };
    }

    default:
      return state;
  }
};

export const setNewUsers = (usersData) => ({ type: SET_NEW_USERS, usersData });
export const eraseUsers = () => ({ type: ERASE_USERS });
export const eraseUsersTC = () => (dispatch) => {
  debugger;
  dispatch(eraseUsers());
  dispatch(handleFocus(false));
  dispatch(setSearchText(""));
  dispatch(discardInitiateRoom());
  dispatch(selectGlobalUser(null));
};
export default users;
