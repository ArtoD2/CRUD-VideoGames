import React from 'react';

// grabs the environment variable for the API URL from the process
const API_URL = process.env.REACT_APP_API_URL;

class CreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            genre: "",
            release: "",
            players: 0,
            consoles: [ "" ],
            owned: false
        }
    }
    addConsole = () => {
        const newConsoles = this.state.consoles.map(x => x);
        newConsoles.push("");
        this.setState({ consoles : newConsoles });
    }
    removeConsole = (index) => {
        const newConsoles = this.state.consoles.map(x => x);
        newConsoles.splice(index, 1);
        this.setState({ consoles : newConsoles });
    }
    handleConsoleChange = (value, index) =>  {
        const newConsoles = this.state.consoles.map(x => x);
        newConsoles[index] = value;
        this.setState({ consoles : newConsoles });
    }
    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value });
        let value = target.type === 'checkbox' ? target.checked : target.value;
        value = target.type === 'number' ? parseInt(value) : value;
        this.setState({ [target.name]: value});
    }
    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        fetch(`${API_URL}/video-games`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(this.props.refresh)
            .then(() => this.setState({
                name: "",
                type: "",
                genre: "",
                release: "",
                players: 0,
                consoles: [ "" ],
                owned: false
                }))
    }
    render () {
        const displayConsoles = this.state.consoles.map((console, index) => {
            return (
                <div key={index}>
                    <select value={this.state.consoles[index]}
                            onChange={({target}) => this.handleConsoleChange(target.value, index)}>
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
                        <option value="Nintendo Wii">Nintendo Wii</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="Sega Genesis">Sega Genesis</option>
                        <option value="Atari 2600">Atari 2600</option>
                        <option value="Atari 5200">Atari 5200</option>
                        <option value="Atari 7800">Atari 7800</option>
                    </select> 
                    <input class="del-btn" type="button" value="X"
                    onClick = {() => this.removeConsole(index)}/>
                </div>
            )
        })
        return (
            <form id="create" onSubmit={this.handleSubmit}>
                <input name="name" placeholder="Game Name" type="text" value={this.state.name} onChange={this.handleChange}/>
                <input name="type" placeholder="Game Type" type="text" value={this.state.type} onChange={this.handleChange}/>
                <input name="genre" placeholder="Game Genre" type="text" value={this.state.genre} onChange={this.handleChange}/>
                <div id="release date input line">
                    <label htmlFor="release">Release Date: </label>
                    <input name="release" type="date" value={this.state.release} onChange={this.handleChange}/>
                </div>
                <div id="player count input line">
                    <label htmlFor="players">Number of Players: </label>
                    <input name="players" type="number" value={this.state.players} onChange={this.handleChange}/>
                </div>
                {displayConsoles}
                <button type="button" value="Add Console"
                onClick={this.addConsole}>Add Console(s)</button>
                <div id="posession input line">
                    <label htmlFor="owned">Do you own it?</label>
                    <input name="owned" placeholder="Do you own it?" type="checkbox" onChange={this.handleChange}/>
                </div>
                <button>Add Game</button>
            </form>
        )
    }
}

export default CreateForm;