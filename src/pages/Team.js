import { useContext } from "react";
import TeamContext from "../components/store/team-context";
import PlayerList from "../components/players/PlayerList";

const Team = (props) => {
  const teamCtx = useContext(TeamContext);
  let content;
  console.log(teamCtx);

  if (teamCtx.totalTeamPlayers === 0) {
    return <p>There are no players in team</p>;
  } else {
    content = <PlayerList players={teamCtx.teamPlayers} />;
  }

  console.log(teamCtx.teamPlayers);

  return (
    <div>
      <h1>Team</h1>
      {content}
    </div>
  );
};

export default Team;
