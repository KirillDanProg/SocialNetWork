import React from "react";
import style from "./Message.module.css";

const Message = (props) => {
  return (
   <div className={style.messageContainer}>
     <img src={props.img} alt="" />
     <div className={style.message}>{props.userMessage}</div>
   </div>
  );
};

export default Message;
