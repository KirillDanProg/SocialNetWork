import React from "react";
import s from "./NewPost.module.css"

const NewPost = () => {
  return (
    <div className={s.newPost}>
      <h4>New post</h4>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Send</button>
    </div>
  );
};

export default NewPost