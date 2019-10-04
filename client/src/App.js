import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      err: ""
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ data: res.data })
      })
      .then(err => {
        this.setState({ err: `API currently isn't working, please try again later. ${err}` })
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="player-wrapper">
          {this.state.data.map(player => {
            return <PlayerCard player={player} />;
          })}
        </div>
      </div>
    )
  };
}

export default App;