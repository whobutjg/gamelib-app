import React from 'react';
import GamesList from '../components/Games/GamesList';

class GamesPage extends React.Component {
  state = {
    games: []
  }

  componentDidMount() {
    fetch('https://gamelibapijg.herokuapp.com/api/v1/games')
    .then((response) => response.json())
    .then((jsonData) => {
      // console.log(jsonData);
      this.setState({
        games: jsonData
      });
    })
    .catch()
  }

  handleDeleteGame = (gameId) => {
    console.log(gameId);
    let confirmed = window.confirm('Are you sure you want to delete this game?');
    if (confirmed) {
      console.log('Fire away!');
      fetch(`https://gamelibapijg.herokuapp.com/api/v1/games/${gameId}`, {
        method: 'DELETE'
      })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        const stateCopy = {...this.state};
        const updatedGames = stateCopy.games.filter((gameObj) => {
          return gameObj._id !== gameId
        });
        this.setState({
          games: updatedGames
        });
      })
      .catch((err) => console.log(err));
    }
  }
  
  render() {
    return (
      <div>
        <h1>Games Page</h1>
       <GamesList games={this.state.games} deleteGame={this.handleDeleteGame} />
      </div>
    );
  }
}


export default GamesPage;