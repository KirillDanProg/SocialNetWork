import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import style from "./Login.module.css";

const LoginForm = (props) => {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    props.login(data.email, data.password);
    resetField("email");
    resetField("password");
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={style.loginBox}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="email"
          name="email"
          className={style.input}
        />
        <input
          {...register("password")}
          type="password"
          name="password"
          className={style.input}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
