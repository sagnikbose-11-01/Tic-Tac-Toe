import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);  
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing? false : true);
    // setIsEditing(!isEditing);
    //recommended practice
    setIsEditing((editing)=> !editing);

    if (isEditing){
      onChangeName(symbol, playerName);
    }
  }


  function handleChange(event) {
     console.log(event);
     setPlayerName(event.target.value);
  }


  let editablePlayerName = <span className="player-name">{playerName}</span>;


  if (isEditing) {
    editablePlayerName = <input className="player-input" type="text" required value={playerName} onChange={handleChange}/>;
  }


    return (
      <li className={isActive? 'active' : undefined}>
        <span className="Player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
      </li>
    );
  
}
