import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import style from "./Dialogs.module.css";
import { useForm } from "react-hook-form";

const Dialogs = (props) => {
  const dialogsEl = props.dialogsPage.dialogs.map((dialog, key) => {
    return (
      <Dialog
        key={key}
        img={dialog.img}
        userName={dialog.userName}
        id={dialog.id}
      />
    );
  });
  const messagesEl = props.dialogsPage.messages.map((message, key) => {
    return (
      <Message key={key} userMessage={message.message} img={message.img} />
    );
  });

  return (
    <div className={style.dialogsContainer}>
      <div className={style.colOne}>
        <div className={style.dialogs}>{dialogsEl}</div>
      </div>
      <div className={style.colTwo}>
        <div className={style.messages}>{messagesEl}</div>
        <div className={style.messageContainer}>
          <DialogForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

const DialogForm = (props) => {

  const {register, handleSubmit, resetField} = useForm()
  const onSubmit = (data) => {
    props.sendMessage(data.message);
    resetField("message")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("message")} name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
