import React from "react";
import { Link } from "react-router-dom";
import style from "./User.module.css";

const User = (props) => {
  return (
    <div className={style.userContainer}>
      <Link to={`/profile/${props.userId}`}>
        <img
          src={
            props.img
              ? props.img
              : "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg"
          }
          alt=""
        />
      </Link>

      <div className={style.userName}>{props.name}</div>

      <div className={style.status}>{props.status}</div>
      <div>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some(
              (id) => id === props.userId
            )}
            onClick={() => {
              props.acceptUnfollow(props.userId);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some(
              (id) => id === props.userId
            )}
            onClick={() => {
              props.acceptFollow(props.userId);
            }}
          >
            follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
