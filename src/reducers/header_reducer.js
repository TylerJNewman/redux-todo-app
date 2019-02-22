import { UPDATE_HEADER_TITLE } from "../actions/header_actions";

const headerReducer = (
  state = { headerTitle: "Todo App", currentView: "TODO_LIST" },
  action
) => {
  Object.freeze(state);
  switch (action.type) {
    case "UPDATE_HEADER_TITLE":
      return Object.assign({}, state, {
        headerTitle: action.headerTitle
      });
    case "UPDATE_CURRENT_VIEW":
      return Object.assign({}, state, {
        currentView: action.currentView
      });
    default:
      return state;
  }
};

export default headerReducer;
