import { useContext, useState } from "react";
import TeamContext from "../store/team-context";
import AllPlayersContext from "../store/allPlayers-context";
import classes from "./PlayerItem.module.css";

const PlayerItem = (props) => {
  const teamCtx = useContext(TeamContext);
  const allPLayersCtx = useContext(AllPlayersContext);
  const [teamPlayers, setTeamPlayers] = useState(teamCtx.teamPlayers);
  const [allPlayers, setAllPlayers] = useState(allPLayersCtx);

  const playerIsInTeam = teamCtx.playerInTeam(props.id);
  const playerIsSelected = teamCtx.isSelected(props.id);

  const addToTeamHandler = () => {
    if (playerIsInTeam) {
      teamCtx.delPlayer(props.id);
    } else {
      teamCtx.addPlayer({
        id: props.id,
        name: props.name,
        position: props.position,
        photo: props.photo,
        selected: false,
      });
    }
    setTeamPlayers(teamPlayers);
  };

  const selectHandler = (playerId) => {
    const newAllPlayers = [...allPLayersCtx.allPlayers];
    const selectedPlayer = newAllPlayers.find(
      (selPlayer) => selPlayer.id === playerId
    );

    selectedPlayer.selected = !selectedPlayer.selected;
    console.log(props.id);
    console.log(allPlayers.allPlayers);
    console.log(newAllPlayers);
  };

  return (
    <div className={classes.container}>
      <h2>{props.name}</h2>
      <h1>{props.position}</h1>
      <img src={props.photo} alt={props.name} />
      <div>
        <button onClick={addToTeamHandler}>
          {!playerIsInTeam ? "Add to team" : "Remove from team"}
        </button>
        <button>Remove</button>
        <input onClick={() => selectHandler(props.id)} type="checkbox" />
      </div>
    </div>
  );
};

export default PlayerItem;
