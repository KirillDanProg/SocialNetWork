import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO"

let initialState = {
  posts: [],
  profile: null,
  status: "",
  profileInfo: null
};

const profileReducer = (state = initialState, action) => {
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
export const addPostActionCreator = (postText) => ({
  type: ADD_POST,
  postText
});
export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};
export const updateUserStatus = (newStatus) => {
  return {
    type: UPDATE_STATUS,
    newStatus,
  };
};
export const setUserPhoto = (photo) => {
  return {
    type: SET_USER_PHOTO,
    photo
  }
}


// thunkCreator
export const profileLoad = (userId) => {
  return (dispatch) => {
    if (userId === undefined) {
      userId = 24498;
    }
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};
export const getUserStatus = (userId) => {
  return (dispatch) => {
    if(userId === undefined) {
      userId = 24498
    }
    profileAPI.getStatus(userId).then((status) => {
      if(status) {
        dispatch(setUserStatus(status));
      } else if(!status) {
        dispatch(setUserStatus(""))
      }
    });
  };
};

export const getUpdateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export const getUserPhoto = (photo) => {
  return (dispatch) => {
    profileAPI.setUserPhoto(photo).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserPhoto(photo))
      }
    })
  }
}

export default profileReducer;
