import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  const dialogs = [
    {
      id: 1,
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
      userName: "Kirill",
    },
    {
      id: 2,
      img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
      userName: "Alex",
    },
    {
      id: 3,
      img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      userName: "John",
    },
    {
      id: 4,
      img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      userName: "Cris",
    },
  ];

  const dialogsEl = dialogs.map((dialog) => {
    return (
      <Dialog img={dialog.img} userName={dialog.userName} id={dialog.id} />
    );
  });

  const messages = [
    {
      id: 1,
      message: "Hello, World!",
    },
    {
      id: 2,
      message: "I am busy now",
    },
    {
      id: 3,
      message: "What have you been up to?",
    },
    {
      id: 4,
      message: "No thanks",
    },
  ];

  const messagesEl = messages.map((message) => {
    return <Message userMessage={message.message} />;
  });

  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>{dialogsEl}</div>
      <div className={style.messages}>{messagesEl}</div>
    </div>
  );
};

export default Dialogs;
