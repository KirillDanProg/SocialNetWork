import React from "react";
import Post from "./post/Post";
import s from "./Posts.module.css";
import NewPostContainer from "./newPost/NewPostContainer";

const Posts = (props) => {
  const postsEl = props.profilePage.posts.map((post, key) => {
    return <Post key={key} img={post.img} text={post.text} likes={post.likes} />;
  });

  return (
    <div className={s.posts}>
      <NewPostContainer dispatch={props.dispatch} profilePage={props.profilePage}/>
      <h4>My posts</h4>
      {postsEl}
    </div>
  );
};

export default Posts;
