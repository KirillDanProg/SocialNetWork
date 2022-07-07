import React from "react";
import { NavLink } from "react-router-dom";
import TeamMate from "../Team/TeamMate/TeamMate";
import s from "./Navbar.module.css";


const Navbar = (props) => {
  const teamSidebar = props.sidebar.mates.map((team, key) => {
    return <TeamMate key={key} img={team.img} name={team.name} />;
  });

  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li className={`${s.item} ${s.itemSet}`}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : undefined)}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
        <li className={`${s.item} ${s.itemSet}`}>
          <NavLink to="/team" className={({ isActive }) => (isActive ? s.active : undefined)}>
            <h4>My Team</h4>
            <div className={s.teamContainer}>{teamSidebar}</div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
