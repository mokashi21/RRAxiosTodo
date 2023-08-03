// reducers.js
// import {
//   PHONE_ERROR,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAILURE,
// } from "./actions";
import { PHONE_ERROR, REGISTER_USER_SUCCESS } from "./action";
import { REGISTER_USER_FAILURE } from "./action";
const initialState = {
  phoneError: "",
  registrationSuccess: false,
  registrationError: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONE_ERROR:
      return {
        ...state,
        phoneError: action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registrationSuccess: true,
        registrationError: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registrationSuccess: false,
        registrationError: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
