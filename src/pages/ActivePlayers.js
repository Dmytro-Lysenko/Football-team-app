import { useState, useContext } from "react";
import AllPlayersContext from "../components/store/allPlayers-context";
import TeamContext from "../components/store/team-context";
import PlayerList from "../components/players/PlayerList";

import classes from "./ActivePlayers.module.css";

const ActivePlayers = (props) => {
  const allPlayersCtx = useContext(AllPlayersContext);
  const teamCtx = useContext(TeamContext);

  const [loadedPlayers, setLoeadedPlayers] = useState([]);
  // const [teamPlayers, setTeamPlayers] = useState(teamCtx.teamPlayers);
  const [allPlayers, setAllPlayers] = useState(allPlayersCtx.allPlayers);

  const uploadPlayerHandler = () => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/players.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const players = [];

        for (const plr in data) {
          const player = {
            id: plr,
            ...data[plr],
          };
          players.push(player);
        }
        setLoeadedPlayers(players);
        setAllPlayers(players);
      });
  };
  allPlayersCtx.allPlayers = allPlayers;

  const deleteAllPlayersHandler = () => {
    setLoeadedPlayers([]);
  };

  const addSelectedToTeamHandler = () => {
    const playersToAdd = allPlayersCtx.allPlayers.filter(
      (player) => player.selected === true
    );
    teamCtx.addPlayers(...playersToAdd);

    // teamCtx.allPlayers = teamPlayers;
    // setTeamPlayers(playersToAdd);
    // console.log(teamCtx)
  };
  // teamCtx.teamPlayers = teamPlayers;

  return (
    <div>
      <h1 className={classes.title}>
        Select the best of football players in your tem
      </h1>
      <div className={classes.upload}>
        <h2>Upload active players</h2>
        <button onClick={uploadPlayerHandler}>Upload</button>
      </div>
      <div>
        <PlayerList players={loadedPlayers} />
      </div>
      <div className={classes.actions}>
        <button onClick={deleteAllPlayersHandler}>Delete players</button>
        <button onClick={addSelectedToTeamHandler}>Add selected to team</button>
      </div>
    </div>
  );
};

export default ActivePlayers;
