const { configureStore } = require("@reduxjs/toolkit");
import greetingReducer from "./store/reducers/greetingReducer";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    // Add other reducers here if needed
  },
});

export default store;
