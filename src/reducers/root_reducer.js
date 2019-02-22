import { combineReducers } from "redux";

import todosReducer from "./todos_reducer";
import stepsReducer from "./steps_reducer";
import headerReducer from "./header_reducer";
import visibilityFilter from "./visibility_filter";

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  header: headerReducer,
  visibilityFilter
});

export default rootReducer;
