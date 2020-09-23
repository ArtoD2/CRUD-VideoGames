import React from 'react';

const VideoGame = (props) => {
    return (
        <div>
            <h4>{props.game.name}<br></br>
                {props.game.type}<br></br>
                {props.game.genre}
            </h4>
        </div>
    );
};

export default VideoGame;


