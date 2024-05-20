import { VisualAdaptation } from "../../func/visualAdaptation.js";
const SET_CONVERSATION_WIDTH = "SET_CONVERSATION_WIDTH";
const SET_DEVICE_VIEW = "SET_DEVICE_VIEW";
const defaultState = {
  isShowedConversation: true, // mobile device screen width
  conversationWidth: null,
  deviceView: "deskView",
};

const visualState = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONVERSATION_WIDTH: {
      return {
        ...state,
        conversationWidth: action.conversationWidth,
      };
    }
    case SET_DEVICE_VIEW: {
      return {
        ...state,
        deviceView: action.deviceView,
      };
    }
  }
  return {
    ...state,
  };
};

export const adaptWidthTC = (screenWidth, sideMenuWidth) => (dispatch) => {
  const visualAdaptation = new VisualAdaptation(screenWidth, sideMenuWidth);
  dispatch(setConversationWidth(visualAdaptation.getConversationWidth()));
  dispatch(setDeviceView(visualAdaptation.whichDeviceView()));
};
export const setConversationWidth = (conversationWidth) => ({
  type: SET_CONVERSATION_WIDTH,
  conversationWidth,
});
export const setDeviceView = (deviceView) => ({
  type: SET_DEVICE_VIEW,
  deviceView,
});
export default visualState;
