import { combineReducers } from "redux";

import todosReducer from "./todos_reducer";
import stepsReducer from "./steps_reducer";
import headerReducer from "./header_reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  header: headerReducer
});

export default rootReducer;
