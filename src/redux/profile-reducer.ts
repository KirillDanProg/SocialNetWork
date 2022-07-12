import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
type InitialStateType = {
  posts: Array<object>
  profile: any
  status: string
  profileInfo: any
}
let initialState = {
  posts: [],
  profile: null,
  status: "",
  profileInfo: null
};
type ActionType = {
  type: string
  postText: string
  profile: number
  status: number
  newStatus: string
}

const profileReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1,
        img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
        text: action.postText,
        likes: 123,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    // case UPDATE_POST_TEXT:
    //   return {
    //     ...state,
    //     postText: action.postText,
    //   };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.newStatus,
      };
    default:
      return state;
  }
};

// actionCreator
export const addPostActionCreator = (postText: string) => ({
  type: ADD_POST,
  postText
});
export const setProfile = (profile: string) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
export const setUserStatus = (status: string) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};
export const setUserPhoto = (photo: string) => {
  return {
    type: SET_USER_PHOTO,
    photo
  }
}


// thunkCreator
export const profileLoad = (userId: number) => {
  return (dispatch: any) => {
    if (userId === undefined) {
      userId = 24498;
    }
    profileAPI.getProfile(userId).then((data: any) => {
      dispatch(setProfile(data));
    });
  };
};
export const getUserStatus = (userId: number) => {
  return (dispatch: any) => {
    if(userId === undefined) {
      userId = 24498
    }
    profileAPI.getStatus(userId).then((status: string) => {
      if(status) {
        dispatch(setUserStatus(status));
      } else if(!status) {
        dispatch(setUserStatus(""))
      }
    });
  };
};

export const getUpdateStatus = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export const getUserPhoto = (photo: string) => {
  return (dispatch: any) => {
    profileAPI.setUserPhoto(photo).then((response: any) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserPhoto(photo))
      }
    })
  }
}

export default profileReducer;
