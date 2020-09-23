import React from 'react';

class CreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: [ "" ],
            genre: "",
            release: "",
            players: 0,
            consoles: [ "" ],
            owned: false
        }
    }
    render () {
        const displayConsoles = this.state.consoles.map((console, index) => {
            return (
                <select value={this.state.consoles[index]}>
                    <option value="">Choose a Console(s)</option>
                    <option value="Playstation 1">Playstation 1</option>
                    <option value="Playstation 2">Playstation 2</option>
                    <option value="Playstation 3">Playstation 3</option>
                    <option value="Playstation 4">Playstation 4</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Xbox 360">Xbox 360</option>
                    <option value="Xbox 1">Xbox 1</option>
                    <option value="PC">PC</option>
                    <option value="NES">NES</option>
                    <option value="SNES">SNES</option>
                    <option value="Nintendo 64">Nintendo 64</option>
                    <option value="Game Cube">Game Cube</option>
                    <option value="Sega Genesis">Sega Genesis</option>
                    <option value="Atari 2600">Atari 2600</option>
                    <option value="Atari 5200">Atari 5200</option>
                    <option value="Atari 7800">Atari 7800</option>
                </select> 
            )
        })
        return (
            <form id="create">
                <input name="name" type="text"/>
                <input name="genre" type="text"/>
                <input name="genre" type="text"/>
                <input name="release" type="text"/>
                <input name="players" type="text"/>
                {displayConsoles}
                <input name="owned" type="text"/>
            </form>
        )
    }
}

export default CreateForm;