import { useRef } from "react";

const AddPlayerForm = (props) => {
  const nameInputRef = useRef();
  const positionInputRef = useRef();
  const photoInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPosition = positionInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;

    const addPlayerData = {
      name: enteredName,
      position: enteredPosition,
      photo: enteredPhoto,
      selected: false,
    };

    console.log(addPlayerData);
    props.onAddPlayer(addPlayerData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" ref={positionInputRef} />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input type="url" id="photo" ref={photoInputRef} />
        </div>
        <div>
          <button>Add player</button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerForm;
