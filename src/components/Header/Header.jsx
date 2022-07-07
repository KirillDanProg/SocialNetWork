import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.login}>
        {props.isAuth ? (
          props.userName
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
      {props.isAuth ? (
        <button className={style.logout} onClick={props.logout}>
          Logout
        </button>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
