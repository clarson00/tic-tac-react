import {useState} from 'react';


export default function Player({initialName,symbol, isActive}){

    useState(initialName);
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((editing) => !editing);
        
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);

    }

    let editPlayerName =<span className="player-name">{playerName}</span>;
    //let playerEditButton  = <button onClick={handleClick}>Edit</button>;

    if(isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />
       // playerEditButton = <button onClick={handleClick}>Save</button>
    }

    return(
        
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        {/* {playerEditButton}  */}
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
     );

}
