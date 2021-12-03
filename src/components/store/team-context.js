import { createContext, useState } from "react";

const TeamContext = createContext({
  teamPlayers: [],
  totalTeamPlayers: 0,
  addPlayer: (player) => {},
  delPlayer: (playerId) => {},
  addPlayers: (...players) => {},
  playerInTeam: (playerId) => {},
  isSelected: (playerId) => {},
});

export const TeamContextProvider = (props) => {
  const [teamPlayers, setTeamPlayers] = useState([]);

  const addTeamPlayerHandler = (teamPlayer) => {
    setTeamPlayers((prevTeamPlayers) => {
      return prevTeamPlayers.concat(teamPlayer);
    });
  };

  const addTeamPlayersHandler = (...teamPlayers) => {
    setTeamPlayers((prevTeamPlayers) => {
      return prevTeamPlayers.concat(teamPlayers);
    });
  };

  const removeTeamPlayerHandler = (playerId) => {
    setTeamPlayers((prevTeamPlayers) => {
      return prevTeamPlayers.filter((teamplayer) => teamplayer.id !== playerId);
    });
  };

  const playerIsTeamPlayer = (playerId) => {
    return teamPlayers.some((teamplayer) => teamplayer.id === playerId);
  };

  const selectedPlayer = (playerId) => {
    const newPlaters = [...teamPlayers];
    const selectedPlayer = newPlaters.find(
      (selPlayer) => selPlayer.id === playerId
    );
  };

  const context = {
    teamPlayers: teamPlayers,
    totalTeamPlayers: teamPlayers.length,
    addPlayer: addTeamPlayerHandler,
    addPlayers: addTeamPlayersHandler,
    delPlayer: removeTeamPlayerHandler,
    playerInTeam: playerIsTeamPlayer,
    isSelected: selectedPlayer,
  };

  return (
    <TeamContext.Provider value={context}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamContext;
