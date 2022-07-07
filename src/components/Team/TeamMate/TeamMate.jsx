import React from "react";
import style from "./TeamMate.module.css";

const TeamMate = (props) => {
  return (
    <div >
      <img className={style.teamContainerImg} src={props.img} />
      <div className={style.teamContainerName}>{props.name}</div>
    </div>
  );
};

export default TeamMate;
