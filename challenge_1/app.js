let count = 0;
let gameWinner;

function player() {
  if (count % 2) {
    count++;
    return 'O';
  }
  count++;
  return 'X';
}

let rows = document.getElementById("game").rows;

function check(obj) {
  if (obj['X'] === 3) {
    return 'X';
  } else if (obj['O'] === 3) {
    return 'O';
  }
  return null;
}

function checkDiagonals() {
  let major = {};
  let minor = {};

  for (let i = 0; i < rows.length; i++) {
    if (major[rows[i].cells[i].innerHTML]) {
      major[rows[i].cells[i].innerHTML]++;
    } else {
      major[rows[i].cells[i].innerHTML] = 1;
    }
    if (minor[rows[i].cells[2 - i].innerHTML]) {
      minor[rows[i].cells[2 - i].innerHTML]++;
    } else {
      minor[rows[i].cells[2 - i].innerHTML] = 1;
    }
  }

  major = check(major);
  minor = check(minor);
  if (major) {
    return major;
  } else if (minor) {
    return minor;
  }

  return null;
}

function checkRows() {
  let winner;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].cells.length; j++) {
      if (j === 0) {
        winner = rows[i].cells[0].innerHTML;
      }
      if (winner && winner === rows[i].cells[j].innerHTML) {
        if (j === 2) { return winner; }
        continue;
      }
      break;
    }
  }

  return null;
}

function checkColumns() {
  let winner;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].cells.length; j++) {
      if (j === 0) {
        winner = rows[0].cells[i].innerHTML;
      }
      if (winner && winner === rows[j].cells[i].innerHTML) {
        if (j === 2) { return winner; }
        continue;
      }
      break;
    }
  }

  return null;
}

function checkForWinner() {
  let winner;
  if (winner = checkDiagonals()) {
    return winner;
  } else if (winner = checkRows()) {
    return winner;
  } else if (winner = checkColumns()) {
    return winner;
  }
  return winner;
}

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].cells.length; j++) {
    rows[i].cells[j].addEventListener("click", (e) => {
      e.preventDefault();
      if (gameWinner) {
        return;
      }
      if (!e.target.innerHTML) {
        e.target.innerHTML = player();
        if (count > 4) {
          let winner = checkForWinner();
          if (winner) {
            gameWinner = winner;
            setTimeout(() => alert(`${winner} is the winner! Please reset the board.`), 100);
          }
        }
      } else {
        console.log('Space is taken!')
      }
    });
  }
}

document.getElementById("reset").addEventListener("click", (e) => {
  e.preventDefault();
  let cells = document.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
  }
  if (gameWinner === 'X') {
    count = 0;
  } else {
    count = 1;
  }
  gameWinner = null;
});
