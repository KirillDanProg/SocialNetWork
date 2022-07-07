import { authAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";
const SET_LOGIN_AUTH = "SET_LOGIN_AUTH";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };
    case SET_LOGIN_AUTH:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
  }
  return state;
};
// actionCreators
export const setUserAuth = (id, login, email, isAuth) => {
  return {
    type: SET_USER_AUTH,
    data: { id, login, email, isAuth },
  };
};
export const setLoginAuth = (email, password) => {
  return {
    type: SET_LOGIN_AUTH,
    data: { email, password },
  };
};

// thunkCreator
export const getUserAuth = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserAuth(id, login, email, true));
      }
    });
  };
};
export const login = (email, password) => {
  return (dispatch) => {
    authAPI.loginAuth(email, password).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getUserAuth());
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
      }
    });
  };
};
export default authReducer;
