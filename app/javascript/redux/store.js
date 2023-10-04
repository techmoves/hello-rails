import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  randomGreeting: "",
};

const SET_RANDOM_GREETING = "SET_RANDOM_GREETING";

export const setRandomGreeting = (greeting) => ({
  type: SET_RANDOM_GREETING,
  payload: greeting,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_GREETING:
      return {
        ...state,
        randomGreeting: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
