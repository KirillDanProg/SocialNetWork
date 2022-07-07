
import React from "react";
import {
  addPostActionCreator,
} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {
  const addNewPost = (postText) => {
    props.dispatch(addPostActionCreator(postText));
  };


  return (
    <NewPost
      addPost={addNewPost}
    />
  );
};
export default NewPostContainer;
