import { followingAPI, usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLLOW";
const SET_USERS = "SET_USERS";
const PAGE_CHANGE = "PAGE_CHANGE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const IS_FETCHING_TOGGLE = "IS_FETCHING_TOGGLE";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";
let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 40,
  totalPages: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case PAGE_CHANGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case IS_FETCHING_TOGGLE:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};

// actionCreators
export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const pageChange = (page) => {
  return {
    type: PAGE_CHANGE,
    page,
  };
};
export const setTotalPages = (totalPages) => {
  return {
    type: SET_TOTAL_PAGES,
    totalPages,
  };
};
export const isFetchingToggle = (isFetching) => {
  return {
    type: IS_FETCHING_TOGGLE,
    isFetching,
  };
};
export const toggleFollowingInProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching,
  };
};

// thunkCreators
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(isFetchingToggle(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalPages(data.totalCount));
      dispatch(isFetchingToggle(false));
    });
  };
};
export const updateUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(pageChange(page));
    dispatch(isFetchingToggle(true));
    usersAPI.updateUsersPage(page, pageSize).then((data) => {
      dispatch(isFetchingToggle(false));
      dispatch(setUsers(data.items));
    });
  };
};
export const acceptFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followingAPI.userFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(false, userId));
        dispatch(follow(userId));
      }
    });
  };
};
export const acceptUnfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followingAPI.userUnfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(false, userId));
        dispatch(unfollow(userId));
      }
    });
  };
};
export default usersReducer;
