export const initialState = {
  term: null,
  sendMessageIsOpen: false,
  selectedMail: null,
  user: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SEND_MESSAGE_IS_OPEN: "SET_SEND_MESSAGE_IS_OPEN",
  SET_SEND_MESSAGE_IS_CLOSE: "SET_SEND_MESSAGE_IS_CLOSE",
  SET_SELECTED_MAIL: "SET_SELECTED_MAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
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

    case actionTypes.SET_SELECTED_MAIL:
      return {
        ...state,
        selectedMail: action.selectedMail,
      };

    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
