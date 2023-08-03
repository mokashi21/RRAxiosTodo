import axios from "axios";

export const PHONE_ERROR = "PHONE_ERROR";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const setPhoneError = (message) => ({
  type: PHONE_ERROR,
  payload: message,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const registerUser = (username, name, phone) => (dispatch) => {
  return axios
    .post("https://64c758e80a25021fde92557d.mockapi.io/TodoArt", {
      name: username,
      Ename: name,
      phone: phone,
    })
    .then(() => {
      dispatch(registerUserSuccess());
    })
    .catch((error) => {
      dispatch(registerUserFailure(error));
      throw error;
    });
};
