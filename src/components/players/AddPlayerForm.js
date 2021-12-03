import { useRef } from "react";
import classes from "./AddPlayerForm.module.css";

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
    <div >
      <h1 className={classes.title}>Add new football player</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" ref={positionInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="photo">Photo:</label>
          <input type="url" id="photo" ref={photoInputRef} required />
        </div>
        <div className={classes.actions}>
          <button>Add player</button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerForm;
