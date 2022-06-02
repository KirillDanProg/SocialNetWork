import React from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = `/messages/${props.id}`
  
  return (
    <NavLink to={path} className={style.dialog}>
      {props.userName}
      <img src={props.img} alt="" />
    </NavLink>
  );
};

export default Dialog;
