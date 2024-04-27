const SET_FETCHING = "SET_FETCHING";

const defaultState = {
  isFetching: false,
};

const preloader = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FETCHING: {
      return {
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};
export default preloader;

export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching,
});
