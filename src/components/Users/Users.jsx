import React from "react";
import Preloader from "../common/Preloader";
import User from "./User/User";
import style from "./Users.module.css";


const Users = (props) => {
  const pagesNum = Math.ceil(props.totalPages / props.pageSize);
  const pagesArr = [];
  for (let i = 1; i <= pagesNum; i++) {
    pagesArr.push(i);
  }
  const pagesCountEl = pagesArr.map((page, key) => {
    return (
      <span
        key={key}
        onClick={() => props.currentPageChange(page)}
        className={props.currentPage === page ? style.selected : undefined}
      >
        {page}
      </span>
    );
  });

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <div className="wrapper">
        <div className={style.pagesCountEl}>{pagesCountEl}</div>
        <div className={style.usersContainer}>
          {props.users.map((user, i) => {
            return (
              <User
                key={i}
                userId={user.id}
                img={user.photos.small}
                name={user.name}
                followed={user.followed}
                follow={props.follow}
                unfollow={props.unfollow}
                toggleFollowingInProgress={props.toggleFollowingInProgress}
                followingInProgress={props.followingInProgress}
                acceptFollow={props.acceptFollow}
                acceptUnfollow={props.acceptUnfollow}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
