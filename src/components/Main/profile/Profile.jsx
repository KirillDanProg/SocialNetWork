import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
        alt=""
      />
      <div className={s.info}>
        <div className={s.name}>Kirill Vuchuzhanin</div>
        <div className={s.data}>
          <p>Date of Birth: 28.09.1998 </p>
          <p>City: SAINT-PETERSBURG</p>
          <p>Occupation: WEB-DEVELOPER</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
