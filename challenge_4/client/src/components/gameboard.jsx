import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: true,
      pieceCount: 0,
      win: false,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    }

    this.handleClick = this.handleClick.bind(this);
  }

  update(row, col, player) {
    this.state.player = !this.state.player;
    this.state.pieceCount++;
    if (this.state.pieceCount > 6) {
      this.checkWins(row, col, player);
    }
    this.setState({ board: this.state.board });
  }

  checkWins(row, col, player) {
    if (this.checkRow(row, player)) {
      this.announce(player);
      return;
    }
    if (this.checkCol(col, player)) {
      this.announce(player);
      return;
    }
    if (this.checkMajor(row, col, player)) {
      this.announce(player);
      return;
    }
    if (this.checkMinor(row, col, player)) {
      this.announce(player);
      return;
    }
  }

  announce(player) {
    setTimeout(() => alert(`${player === 'X' ? 'BLUE' : 'RED'} is the winner`), 100);
  }

  checkRow(row, player) {
    row = this.state.board[row];
    let count = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i] === player) {
        count++;
        if (count >= 4) {
          this.state.win = true;
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  checkCol(col, player) {
    let board = this.state.board;
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === player) {
        count++;
        if (count >= 4) {
          this.state.win = true;
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  checkMajor(row, col, player) {
    //figure out starting row/col
    let board = this.state.board;
    let count = 0;
    if (row === col) {
      row = 0;
      col = 0;
    } else if (row > col) {
      row = row-col;
      col = 0;
    } else {
      row = 0;
      col = col-row;
    }
    for (let i = 0; i < board.length; i++) {
      if (row + i > board.length - 1 || col + i > board.length - 1) {
        return false;
      }
      if (board[row + i][col + i] === player) {
        count++;
        if (count >= 4) {
          this.state.win = true;
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  checkMinor(row, col, player) {
    //figure out starting row/col
    let board = this.state.board;
    let count = 0;
    let sum = row + col;
    if (sum < board.length) {
      row = sum;
      col = 0;
    } else {
      row = board.length - 1;
      col = sum - row;
    }
    for (let i = 0; i < board.length; i++) {
      if (row - i < 0 || col + i > board.length - 1) {
        return false;
      }
      if (board[row - i][col + i] === player) {
        count++;
        if (count >= 4) {
          this.state.win = true;
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  handleClick(id) {
    if (this.state.win) {
      console.log('There is a winner, restart the game.');
      return;
    }
    for (let i = 5; i >= 0; i--) {
      if (!this.state.board[i][id]) {
        if (this.state.player) {
          this.state.board[i][id] = 'X';
          this.update(i, id, 'X');
          return;
        } else {
          this.state.board[i][id] = 'O';
          this.update(i, id, 'O');
          return;
        }
      }
    }
    console.log('No more space left in this column. Please choose again.');
  }

  render() {
    return (
      <table className="board">
        {this.state.board.map((row, i) =>
          <Row key={i} row={row} id={i} handleClick={this.handleClick} />
        )}
      </table>
    )
  }
}

export default Board;
