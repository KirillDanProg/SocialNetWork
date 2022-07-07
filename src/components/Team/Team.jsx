import React from "react";
import style from "./Team.module.css";
import TeamMate from "./TeamMate/TeamMate";

const Team = (props) => {
  const teamMates = props.sidebar.mates.map((team, key) => {
    return <TeamMate key={key} img={team.img} name={team.name} />;
  });
  return (
    <div className={style.team}>
      <h3>My Team</h3>
      {teamMates}
    </div>
  );
};

export default Team;
