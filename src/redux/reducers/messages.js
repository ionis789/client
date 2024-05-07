import { messageApi } from "../../API/MessageApi.js";
import { updateMessage } from "./rooms.js";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";
const RESET_MESSAGE_INPUT_TEXT = "RESET_MESSAGE_INPUT_TEXT";
const defaultState = {
  messageInputText: "",
};

const Messages = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return {
        ...state,
        messageInputText: action.messageText,
      };
    }
    case RESET_MESSAGE_INPUT_TEXT: {
      return {
        ...state,
        messageInputText: "",
      };
    }

    default:
      return state;
  }
};
export const sendMessageTC = (roomID, senderID, messageInputText) => () => {
  debugger;
  if (messageInputText !== "")
    messageApi.sendMessage(roomID, senderID, messageInputText);
};
export const receivedMessageTC = (messagePayLoad) => (dispatch) => {
  debugger;
  dispatch(updateMessage(messagePayLoad));
  dispatch(resetMessageInputText());
};

export const changeMessage = (messageText) => {
  return { type: CHANGE_MESSAGE, messageText };
};
export const resetMessageInputText = () => ({ type: RESET_MESSAGE_INPUT_TEXT });
export default Messages;
