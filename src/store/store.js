// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import registrationReducer from "./reducers/registrationReducer"; // Adjust the path based on your file structure
import registrationReducer from "./reducer";
const rootReducer = combineReducers({
  registration: registrationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
