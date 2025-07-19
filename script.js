const CONTAINER_SIZE = 960;
const DARKEN_STEP = 255 * 0.1;
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

    gridCell.style.backgroundColor = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255})`;

    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseenter", () => {
      console.log(`inicial: ${gridCell.style.backgroundColor.match(/\d+/g)}`);
      let gridCellColor = gridCell.style.backgroundColor.match(/\d+/g);

      gridCell.style.backgroundColor = `rgb(
      ${gridCellColor[0] - gridCellColor[0] * 0.1},
      ${gridCellColor[1] - gridCellColor[1] * 0.1},
      ${gridCellColor[2] - gridCellColor[2] * 0.1})
      `;

      console.log(DARKEN_STEP);
      console.log(`final: ${gridCell.style.backgroundColor}`);
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
