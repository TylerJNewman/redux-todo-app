import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from "../actions/step_actions";

const initialState = {
  1: {
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1
  },
  3: {
    id: 3,
    title: "walk to park",
    done: false,
    todo_id: 3
  },
  4: {
    id: 4,
    title: "play with dog",
    done: false,
    todo_id: 2
  }
};

const stepsReducer = (state = initialState, action) => {
  let nextState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = Object.assign({}, state);
      action.steps.forEach(step => (nextState[step.id] = step));
      return nextState;
    case RECEIVE_STEP:
      return Object.assign({}, state, { [action.step.id]: action.step });
    case REMOVE_STEP:
      nextState = Object.assign({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;
