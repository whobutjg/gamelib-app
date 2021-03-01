import React from 'react';

class NewGamePage extends React.Component {
  state = {
    title: '',
    publisher: '',
    coverArtUrl: '',
    completed: false
  }

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://gamelibapijg.herokuapp.com/api/v1/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
  }
  
  render() {
    return (
      <div>
        <h1>Add a New Game</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label> <br/>
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.inputChangeHandler}/>
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label> <br/>
            <input type="text" id="publisher" name="publisher" value={this.state.publisher} onChange={this.inputChangeHandler}/>
          </div>
          <div>
            <label htmlFor="coverArtUrl">Cover Art URL</label> <br/>
            <input type="text" id="coverArtUrl" name="coverArtUrl" value={this.state.coverArtUrl} onChange={this.inputChangeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewGamePage;