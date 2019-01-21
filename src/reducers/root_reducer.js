import { combineReducers, createStore } from "redux";
import todosReducer from "./todos_reducer";

const rootReducer = combineReducers({
  todosReducer
});

export default rootReducer;
