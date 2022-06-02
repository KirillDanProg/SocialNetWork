import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        src={props.img}
        alt=""
      />
      <p className={s.postText}>
       {props.text}
      </p>
      <span><i className="fa-solid fa-thumbs-up"></i>{props.likes}</span>
    </div>
  );
};

export default Post
