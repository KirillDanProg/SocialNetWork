import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  setUsers,
  unfollow,
  pageChange,
  setTotalPages,
  isFetchingToggle,
  toggleFollowingInProgress,
  getUsers,
  updateUsers,
  acceptFollow,
  acceptUnfollow,
} from "../../redux/users-reducer";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  currentPageChange = (page) => {
    this.props.updateUsers(page, this.props.pageSize);
  };

  render() {
    return <Users currentPageChange={this.currentPageChange} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalPages: state.usersPage.totalPages,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    setUsers,
    unfollow,
    setTotalPages,
    isFetchingToggle,
    pageChange,
    toggleFollowingInProgress,
    getUsers,
    updateUsers,
    acceptFollow,
    acceptUnfollow,
  }),
  withAuthRedirect
)(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     currentPageChange: (page) => {
//       dispatch(currentPageChangeAC(page));
//     },
//     setTotalPages: (totalPages) => {
//       dispatch(setTotalPagesAC(totalPages));
//     },
//     isFetchingToggle: (isFetching) => {
//       dispatch(isFetchingToggleAC(isFetching));
//     },
//   };
// };
