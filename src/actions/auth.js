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
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = (userShort) => {
  return {
    type: LOGIN_SUCCESS,
    userShort,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};



const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};



const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

const registerError = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

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

export const logoutUser = () => (dispatch) => {
   dispatch(receiveLogout());
};

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
export const verifyAuth = () => (dispatch) => {
  // dispatch(verifyRequest());
  // myFirebase.auth().onAuthStateChanged((user) => {
  //   if (user !== null) {
  //     dispatch(receiveLogin(user));
  //   }
  //   dispatch(verifySuccess());
  // });
};
