import React from "react";
import style from "./Profile.module.css";
import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
      <main className={style.main}>
        <ProfileInfo getUserPhoto={props.getUserPhoto} profile={props.profile} status={props.status} getUserStatus={props.getUserStatus} getUpdateStatus={props.getUpdateStatus}/>
        <PostsContainer />
      </main>
  );
};
export default Profile;
