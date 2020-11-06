import React from 'react';
import Board from './gameboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: ''
    }
  }

  render() {
    return(
      <div>
        <h2>Connect 4</h2>
        <Board />
      </div>
    )
  }
}

export default App;
