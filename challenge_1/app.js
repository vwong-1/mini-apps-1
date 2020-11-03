let count = 0;

function player() {
  if (count % 2) {
    count++;
    return 'O';
  }
  count++;
  return 'X';
}

let rows = document.getElementById("game").rows;
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].cells.length; j++) {
    rows[i].cells[j].addEventListener("click", (e) => {
      e.target.innerHTML = player();
    });
  }
}
