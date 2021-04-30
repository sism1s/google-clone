export const initialState = {
  term: null,
  sendMessageIsOpen: false,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SEND_MESSAGE_IS_OPEN: "SET_SEND_MESSAGE_IS_OPEN",
  SET_SEND_MESSAGE_IS_CLOSE: "SET_SEND_MESSAGE_IS_CLOSE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    case actionTypes.SET_SEND_MESSAGE_IS_OPEN:
      return {
        ...state,
        sendMessageIsOpen: true,
      };

    case actionTypes.SET_SEND_MESSAGE_IS_CLOSE:
      return {
        ...state,
        sendMessageIsOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
