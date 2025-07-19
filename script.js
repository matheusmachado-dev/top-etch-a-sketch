CONTAINER_SIZE = 960;
let gridSize = 16;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn-reset");
const resizeBtn = document.querySelector(".btn-resize");

resetBtn.addEventListener("click", handleResetBtn);
resizeBtn.addEventListener("click", handleResizeBtn);

createGrid(gridSize);

function createGrid(newGridSize) {
  gridSize = newGridSize;
  for (let i = 0; i < newGridSize * newGridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${CONTAINER_SIZE / newGridSize}px`;
    gridCell.style.height = `${CONTAINER_SIZE / newGridSize}px`;
    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = "blue";
    });
    container.appendChild(gridCell);
  }
  return;
}
function removeGrid() {
  container.replaceChildren();
}
function handleResetBtn() {
  removeGrid();
  createGrid(gridSize);
}
function handleResizeBtn() {
  const userSize = prompt("Choose a new size between 1 and 100 squares");
  removeGrid();
  createGrid(userSize);
}
