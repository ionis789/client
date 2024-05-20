import roomsApi from "../../API/RoomsApi.js";
import { findUserApi } from "../../API/findUserApi.js";
import { setFetching } from "./preloader.js";
import { eraseUsersTC, setNewUsers } from "./users.js";
import messages from "./messages.js";

const SET_USER_ROOMS = "SET_USER_ROOMS";
const SELECT_ROOM = "SELECT_ROOM";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const UPDATE_ROOM = "UPDATE_ROOM";
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
  selectedRoomData: {
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
  },
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
        selectedRoomData: state.allRoomsData.find(
          (r) => r.roomID === action.selectedRoomID,
        ),
      };
    }
    case SELECT_GLOBAL_USER: {
      return {
        ...state,
        selectedGlobalUserID: action.userID,
      };
    }
    case UPDATE_MESSAGES: {
      let selectedRoomDataCopy = { ...state.selectedRoomData };

      const updatedRoomsData = state.allRoomsData.map((room) => {
        if (room.roomID === action.newMessage.room_id) {
          // Create a copy of the messages array and add the new message
          const updatedMessages = [...room.messages, action.newMessage];
          // Return a new room object with the updated messages
          return { ...room, messages: updatedMessages };
        }
        // Return the room without modifications if it is not the target room
        return room;
      });

      // Update selectedRoomDataCopy only if it is the target room
      if (selectedRoomDataCopy.roomID === action.newMessage.room_id) {
        selectedRoomDataCopy = {
          ...selectedRoomDataCopy,
          messages: [...selectedRoomDataCopy.messages, action.newMessage],
        };
      }

      return {
        ...state,
        allRoomsData: updatedRoomsData,
        selectedRoomData: selectedRoomDataCopy,
      };
    }

    case UPDATE_ROOM: {
      return {
        ...state,
        allRoomsData: [...state.allRoomsData, action.newRoomData],
        selectedRoomData: action.newRoomData,
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
export const updateRooms = (newRoomData) => ({
  type: UPDATE_ROOM,
  newRoomData,
});
export const updateRoomsTC = (newRoomData, selectedRoomID) => (dispatch) => {
  dispatch(updateRooms(newRoomData));
  dispatch(eraseUsersTC());
  dispatch(selectRoom(selectedRoomID));
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
    await roomsApi.createRoom(loggedUserID, userCompanionID);
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
