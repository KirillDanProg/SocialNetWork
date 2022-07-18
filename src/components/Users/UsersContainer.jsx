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

function UsersContainer(props) {
    let [count, setCount] = React.useState(1)

    React.useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const fetchMoreData = () => {
        setCount(count + 1)
        props.updateUsers(count, 10)
    }

    return (
        <Users fetchMoreData={fetchMoreData}  {...props}/>
    )
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

