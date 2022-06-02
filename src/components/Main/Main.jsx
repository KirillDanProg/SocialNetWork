import React from "react";
import s from "./Main.module.css";
import Posts from "./posts/Posts";
import Profile from "./profile/Profile";

const Main = () => {
  return (
    <main className={s.main}>
      <Profile />
      <Posts />
    </main>
  );
};
export default Main;
