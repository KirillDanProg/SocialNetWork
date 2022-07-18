import { followingAPI, usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const PAGE_CHANGE = "PAGE_CHANGE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const IS_FETCHING_TOGGLE = "IS_FETCHING_TOGGLE";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

type InitStateType = {
  users: Array<UserType>
  currentPage: number
  pageSize: number
  totalPages: number
  isFetching: boolean
  followingInProgress: any
}
type UserType = {
  name: string
  id: number
  photos: {
    small: string | null,
    large: string | null
  }
  status: string | null,
  followed: boolean
}

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 10,
  totalPages: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state: InitStateType = initialState, action: any): InitStateType => {
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
        users: [...state.users, ...action.users],
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
          : state.followingInProgress.filter((id: number) => id !== action.userId),
      };
    default:
      return state;
  }
};

// actionCreators
export const follow = (userId: number) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users: any) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const pageChange = (page: number) => {
  return {
    type: PAGE_CHANGE,
    page,
  };
};
export const setTotalPages = (totalPages: number) => {
  return {
    type: SET_TOTAL_PAGES,
    totalPages,
  };
};
export const isFetchingToggle = (isFetching: boolean) => {
  return {
    type: IS_FETCHING_TOGGLE,
    isFetching,
  };
};
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
  return {
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching,
  };
};


// thunkCreators
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(isFetchingToggle(true));
    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalPages(data.totalCount));
      dispatch(isFetchingToggle(false));
    });
  };
};
export const updateUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(pageChange(currentPage));
    dispatch(isFetchingToggle(true));
    usersAPI.updateUsersPage(currentPage, pageSize).then((data: any) => {
      dispatch(setUsers(data.items));
      dispatch(isFetchingToggle(false));
    });
  };
};
export const acceptFollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followingAPI.userFollow(userId).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(false, userId));
        dispatch(follow(userId));
      }
    });
  };
};
export const acceptUnfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followingAPI.userUnfollow(userId).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollowingInProgress(false, userId));
        dispatch(unfollow(userId));
      }
    });
  };
};

export default usersReducer;
