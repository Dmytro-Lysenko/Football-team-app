import { createContext, useState } from "react";

const AllPlayersContext = createContext({
  allPlayers: [],
  totalTeamPlayers: 0,
  delPlayer: (playerId) => {},
  isSelected: (playerId) => {},
});

export const AllPlayersContextProvider = (props) => {
  const [allPlayersList, setAllPlayersList] = useState([]);

  const removePlayerHandler = (playerId) => {
    setAllPlayersList((prevAllPlayers) => {
      return prevAllPlayers.filter((teamplayer) => teamplayer.id !== playerId);
    });
  };

  const selectedPlayer = (playerId) => {
    const newAllPlayers = [...allPlayersList];
    console.log(newAllPlayers);
    const selectedPlayer = newAllPlayers.find(
      (selPlayer) => selPlayer.id === playerId
    );

    // selectedPlayer.selected = !selectedPlayer.selected;

    console.log(selectedPlayer);
  };

  const context = {
    allPlayers: allPlayersList,
    totalTeamPlayers: allPlayersList.length,
    delPlayer: removePlayerHandler,
    isSelected: selectedPlayer,
  };

  return (
    <AllPlayersContext.Provider value={context}>
      {props.children}
    </AllPlayersContext.Provider>
  );
};

export default AllPlayersContext;
