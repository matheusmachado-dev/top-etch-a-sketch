const CONTAINER_SIZE = 960;
const DARKEN_STEP = 255 * 0.1;
let gridSize = 16;
let isColorActive = false;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn-reset");
const resizeBtn = document.querySelector(".btn-resize");
const colorBtn = document.querySelector(".color-btn");

resetBtn.addEventListener("click", handleResetBtn);
resizeBtn.addEventListener("click", handleResizeBtn);
colorBtn.addEventListener("click", handleColorBtn);

createGrid(gridSize);

function createGrid(newGridSize) {
  gridSize = newGridSize;
  for (let i = 0; i < newGridSize * newGridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${CONTAINER_SIZE / newGridSize}px`;
    gridCell.style.height = `${CONTAINER_SIZE / newGridSize}px`;
    gridCell.style.backgroundColor = `rgb(0, 0, 0)`;
    if (isColorActive) {
      gridCell.style.backgroundColor = `rgb(
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255})`;
    }
    gridCell.style.opacity = 0;
    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseenter", () => {
      const current = parseFloat(gridCell.style.opacity);
      gridCell.style.opacity = current + 0.1;
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
  let userSize = parseInt(
    prompt("Choose a new size between 1 and 100 squares")
  );
  if (userSize > 100) {
    userSize = 100;
  }
  if (userSize < 1) {
    userSize = 1;
  }
  removeGrid();
  createGrid(userSize);
}
function handleColorBtn() {
  isColorActive = !isColorActive;
  colorBtn.textContent = isColorActive ? "Disable Colors" : "Active Colors";
  removeGrid();
  createGrid(gridSize);
}
