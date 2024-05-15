import roomsApi from "../../API/RoomsApi.js";
import { findUserApi } from "../../API/findUserApi.js";
import { handleFocus, setSearchText } from "./search.js";
import { setFetching } from "./preloader.js";
import { setNewUsers } from "./users.js";

const SET_USER_ROOMS = "SET_USER_ROOMS";
const SELECT_ROOM = "SELECT_ROOM";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const INITIATE_ROOM = "INITIATE_ROOM";
const DISCARD_INITIATE_ROOM = "DISCARD_INITIATE_ROOM";
const SELECT_GLOBAL_USER = "SELECT_GLOBAL_USER";
const defaultState = {
  potentialRoom: {
    isInitiateConversation: false,
    userCompanionID: null,
    userCompanionName: null,
  },
  selectedRoomID: null,
  selectedGlobalUserID: null,
  allRoomsData: [
    // {
    //   roomID: null,
    //   userCompanionInfo: {
    //     user_id: null,
    //     user_name: "",
    //     photoURL: null,
    //     userStatus: {
    //       isOnline: null,
    //       lastSeen: null,
    //       isTyping: null,
    //     },
    //   },
    //   messages: [
    //     {
    //       message_id: null,
    //       room_id: null,
    //       sender_id: null,
    //       message_text: "",
    //       updatedAt: "2024-04-13",
    //       createdAt: "2024-04-13",
    //     },
    //   ],
    // },
  ],
};

const rooms = (state = defaultState, action) => {
  switch (action.type) {
    case INITIATE_ROOM: {
      return {
        ...state,

        potentialRoom: {
          isInitiateConversation: true,
          userCompanionID: action.potentialUserCompanionID,
          userCompanionName: action.potentialUserCompanionName,
        },
      };
    }
    case DISCARD_INITIATE_ROOM: {
      return {
        ...state,
        potentialRoom: {
          isInitiateConversation: false,
          userCompanionName: null,
          userCompanionID: null,
        },
      };
    }
    case SELECT_ROOM: {
      return {
        ...state,
        selectedRoomID: action.selectedRoomID,
      };
    }
    case SELECT_GLOBAL_USER: {
      return {
        ...state,
        selectedGlobalUserID: action.userID,
      };
    }
    case UPDATE_MESSAGES: {
      const updatedMessagesRoom = state.allRoomsData.map((room) => {
        if (room.roomID === action.newMessage.room_id)
          room.messages.push(action.newMessage);
        return room;
      });
      // id of room and updated messages of this room
      return {
        ...state,
        allRoomsData: [...updatedMessagesRoom],
      };
    }
    case SET_USER_ROOMS: {
      return {
        ...state,
        allRoomsData: action.allRoomsData.map((r) => ({ ...r })),
      };
    }
    default:
      return state;
  }
};

export const getMatchedUsers = (searchText, avoidUsers) => (dispatch) => {
  dispatch(setFetching(true));
  findUserApi.getMatchedUser(searchText, avoidUsers).then((res) => {
    dispatch(setNewUsers(res.data));
    dispatch(setFetching(false));
    dispatch(setFetching(false));
  });
};

export const initiatePotentialRoomTC =
  (potentialUserCompanionID, potentialUserCompanionName) => (dispatch) => {
    dispatch(
      initiateRoom(potentialUserCompanionID, potentialUserCompanionName),
    );
    dispatch(selectGlobalUser(potentialUserCompanionID));
  };
export const selectGlobalUser = (userID) => ({
  type: SELECT_GLOBAL_USER,
  userID,
});

export const createRoomTC =
  (loggedUserID, userCompanionID) => async (dispatch) => {
    // aici se face socket emit pentru crearea unei cameri noi "io.emit("create_room") dupa ce sa facut acel emit, multumita la then din functia de mai jos se va face dispatch-urile ce vor curata totul, dupa vine se executa emitul de la server, se va face cererea "getRoomsTC()" in LocalDialogsListC io.on("new_room"). executarea dispatchuri-lor ce curata totul se executa doar pentru acel care o facut cererea de creare de camere la acelalat user doar se va face "io.on("new_room")", asta se intampla din cauza ca dispatchurile sunt excutata doara daca intri in thunkul "createRoomTC" dar pentru companion asta nu se va intampla el doar va primia evenimentul socket si atat.
    roomsApi.createRoom(loggedUserID, userCompanionID).then(() => {
      dispatch(discardInitiateRoom());
      dispatch(handleFocus(false));
      dispatch(setSearchText(""));
    });
  };
export const getRoomsTC = () => async (dispatch) => {
  const allRoomsData = await roomsApi.getRooms();
  dispatch(setUserRooms(allRoomsData.data.userRooms));
};
export const setUserRooms = (allRoomsData) => ({
  type: SET_USER_ROOMS,
  allRoomsData,
});
export const initiateRoom = (
  potentialUserCompanionID,
  potentialUserCompanionName,
) => ({
  type: INITIATE_ROOM,
  potentialUserCompanionID,
  potentialUserCompanionName,
});
export const discardInitiateRoom = () => ({ type: DISCARD_INITIATE_ROOM });
export const updateMessage = (newMessage) => ({
  type: UPDATE_MESSAGES,
  newMessage,
});
export const selectRoom = (selectedRoomID) => ({
  type: SELECT_ROOM,
  selectedRoomID,
});
export default rooms;
