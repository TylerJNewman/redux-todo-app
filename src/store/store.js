import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import localForage from "localforage";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  // middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
  store.subscribe(() => {
    let state = JSON.stringify(store.getState());
    localForage
      .setItem("Redux_Todo_App", state)
      .then(function() {
        return localForage.getItem("Redux_Todo_App");
      })
      .then(function(value) {
        // we got our value
      })
      .catch(function(err) {
        // we got an error
      });
  });
  return store;
};

export default configureStore;
