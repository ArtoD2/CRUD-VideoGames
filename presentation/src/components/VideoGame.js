import React, {useState} from 'react';
import UpdateForm from './UpdateForm';

const API_URL = process.env.REACT_APP_API_URL;

const VideoGame = ({ game, refresh }) => {
    const [open, setOpen] = useState(false);

    /*const updateGame = () => {
        fetch(`${API_URL}/video-games/${game._id}`, {
            method: "PUT"
        }).then(refresh)
    }*/
    
    const deleteGame = () => {
        fetch(`${API_URL}/video-games/${game._id}`, {
            method: "DELETE"
        }).then(refresh)
    }
    const toggleOpen = () => setOpen(!open);
    const displayUpdate = open ?
        <fieldset>
            <UpdateForm game={game} refresh={refresh} close={toggleOpen}/>
        </fieldset> :
        ``;
    return (
        <div>
            <span id="delete button">
                {game.name}
                <button className="edit" onClick={toggleOpen}>Edit</button>
                <button className="del-btn" onClick={deleteGame}>X</button>
                {displayUpdate}
            </span>
        </div>
    );
};

export default VideoGame;


