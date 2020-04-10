import React from 'react';
import './App.css';
import axios from "axios";
import nextId from "react-id-generator";
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response)
        this.setState({
          player: response.data
        })
      })
      .catch(err => {
        console.log("Failed to retrieve data", err)
      })
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="largeContainer">
            {this.state.player && this.state.player.map(value => (
              <PlayerCard name={value.name} country={value.country} searches={value.searches} key={nextId()} />
            ))}
          </div>

      </div>
    );
  }
}

export default App;
