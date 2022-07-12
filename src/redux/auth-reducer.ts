import { authAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";
const SET_LOGIN_AUTH = "SET_LOGIN_AUTH";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
type ActionType = {
  type: string
  email: string
  password: string
  data: object
}
const authReducer = (state = initialState, action: ActionType) => {
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
export const setUserAuth = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: SET_USER_AUTH,
    data: { id, login, email, isAuth },
  };
};
export const setLoginAuth = (email: string, password: string) => {
  return {
    type: SET_LOGIN_AUTH,
    data: { email, password },
  };
};

// thunkCreator
type DataType = {
  resultCode: number
  data: {
    id: number
    login: string
    email: string
  }
}
export const getUserAuth = () => {
  return (dispatch: any) => {
    authAPI.authMe().then((data: DataType) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserAuth(id, login, email, true));
      }
    });
  };
};
export const login = (email: string, password: string) => {
  return (dispatch: any) => {
    authAPI.loginAuth(email, password).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(getUserAuth());
      }
    });
  };
};
export const logout = () => {
  return (dispatch: any) => {
    authAPI.logout().then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
      }
    });
  };
};
export default authReducer;
