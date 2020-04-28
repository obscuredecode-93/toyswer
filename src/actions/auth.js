import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";
import axios from "../api/axios";

//action for requesting login
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

//action for recieving login
const receiveLogin = (userShort) => {
  return {
    type: LOGIN_SUCCESS,
    userShort,
  };
};

//action for login error
const loginError = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};



//action for recieving logout
const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};


//action for requesting registration
const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

//action for successful registration
const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

//action for registration error
const registerError = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

//login user dispatch function
export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  axios
    .get("/login", {
      params: {
        eMail: email,
        password,
      },
    })
    .then((response) => {
      if( response.data === null){
        dispatch(loginError("Incorrect username and/or password"));
      } else {
        const [firstname, role] = response.data;
        dispatch(receiveLogin({ firstname, role }));
      }
    })
    .catch((error) => {
      dispatch(loginError("Something went wrong"));
    });
};

//logout user dispatch function
export const logoutUser = () => (dispatch) => {
   dispatch(receiveLogout());
};

//register user dispatch function
export const registerUser = (
  firstname,
  lastname,
  username,
  password,
  date,
  role
) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("/add", {
      eMail: username,
      fName: firstname,
      lName: lastname,
      signDate: date,
      password,
      role,
    })
    .then(() => {
      dispatch(
        registerSuccess({ firstname, lastname, username, password, date, role })
      );
    })
    .catch((error) => {
      dispatch(registerError());
    });
};
