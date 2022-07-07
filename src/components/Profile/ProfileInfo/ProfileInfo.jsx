import React from "react";
import Preloader from "../../common/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
const  ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profile}>
      <ProfilePhoto photo={props.profile.photos.large} />
      <div className={s.info}>
        <ProfileName name={props.profile.fullName}/>
        <ProfileStatus
          getUserPhoto={props.getUserPhoto}
          getUpdateStatus={props.getUpdateStatus}
          getUserStatus={props.getUserStatus}
          status={props.status}
        />
          <p className={s.info}>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

const ProfilePhoto = (props) => {
  return (
    <img
      src={
        props.photo != null
          ? props.photo
          : "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg"
      }
      alt="#"
    />
  );
};
const ProfileName = (props) => {
  return <div className={s.name}>{props.name}</div>;
};
export default ProfileInfo;
