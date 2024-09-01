const grid = document.querySelector('.grid');
const numCells = 15;

for (let i = 0; i < numCells * numCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}