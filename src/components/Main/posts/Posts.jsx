import React from "react";
import Post from "./post/Post";
import s from "./Posts.module.css";
import NewPost from "./newPost/NewPost";

const Posts = () => {
  const posts = [
    {
      id: 1,
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
      text: "some text number one",
      likes: 271,
    },
    {
      id: 2,
      img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
      text: "some text number two",
      likes: 13,
    },
    {
      id: 3,
      img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      text: "some text number three",
      likes: 1377,
    },
    {
      id: 4,
      img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      text: "some text number four",
      likes: 197,
    },
  ];

  const postsEl = posts.map((post) => {
    return <Post img={post.img} text={post.text} likes={post.likes} />;
  });
  
  return (
    <div className={s.posts}>
      <NewPost />
      <h4>My posts</h4>
      {postsEl}
    </div>
  );
};

export default Posts;
