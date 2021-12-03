import PlayerItem from "./PlayerItem";
import classes from "./PlayersList.module.css";

const PlayerList = (props) => {
  return (
    <section className={classes.container}>
      {props.players.map((player) => (
        <PlayerItem
          key={player.id}
          id={player.id}
          name={player.name}
          position={player.position}
          photo={player.photo}
        />
      ))}
    </section>
  );
};

export default PlayerList;
