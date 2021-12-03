import AddPlayerForm from "../components/players/AddPlayerForm";

import { useNavigate } from "react-router-dom";

const AddPlayer = () => {
  let navigate = useNavigate();

  const onAddPlayerHandler = (playerData) => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/players.json",
      {
        method: "POST",
        body: JSON.stringify(playerData),
        headers: {
          "content-Type": "aplication/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <h1>Add player</h1>
      <AddPlayerForm onAddPlayer={onAddPlayerHandler} />
    </div>
  );
};

export default AddPlayer;
