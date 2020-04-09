import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
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

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
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
      const [firstname, role] = response.data;
      dispatch(receiveLogin({ firstname, role }));
    })
    .catch((error) => {
      dispatch(loginError());
    });
  // myFirebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((user) => {
  //
  //   })
  //   .catch((error) => {
  //     //Do something with the error if you want!
  //     dispatch(loginError());
  //   });
};

export const logoutUser = () => (dispatch) => {
  // dispatch(requestLogout());
  // myFirebase
  //   .auth()
  //   .signOut()
  //   .then(() => {
  //     dispatch(receiveLogout());
  //   })
  //   .catch((error) => {
  //     //Do something with the error if you want!
  //     dispatch(logoutError());
  //   });
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
