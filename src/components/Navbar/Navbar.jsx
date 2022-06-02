import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/main"
          >
            Main
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({ isActive }) => (isActive ? s.active : undefined)} to="/messages">
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({ isActive }) => (isActive ? s.active : undefined)} to="/projects">
            Projects
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={({ isActive }) => (isActive ? s.active : undefined)} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li className={`${s.item} ${s.itemSet}`}>
          <NavLink className={({ isActive }) => (isActive ? s.active : undefined)} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
