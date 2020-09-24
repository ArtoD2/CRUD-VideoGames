import React from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const VideoGame = ({ game, refresh }) => {
    const deleteGame = () => {
        fetch(`${API_URL}/video-games/${game._id}`, {
            method: "DELETE"
        }).then(refresh)
    }
    return (
        <div>
            <span>
                {game.name}
                <button className="del-btn" onClick={deleteGame}>X</button><br/>
            </span>
                {game.type}<br/>
                {game.genre}
        </div>
    );
};

export default VideoGame;


