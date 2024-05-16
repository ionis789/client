const IS_SHOWED_CONVERSATION = "IS_SHOWED_CONVERSATION";
const defaultState = {
  isShowedConversation: false, // mobile device screen width
};

const visualState = (state = defaultState, action) => {
  switch (action.type) {
    case IS_SHOWED_CONVERSATION: {
      return {
        ...state,
        isShowedConversation: action.isShowedConversation,
      };
    }
  }
  return {
    ...state,
  };
};
export const setShowedConversation = (isShowedConversation) => ({
  type: IS_SHOWED_CONVERSATION,
  isShowedConversation,
});
export default visualState;
