CONTAINER_SIZE = 960;
let gridSize = 16;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn-reset");

resetBtn.addEventListener("click", handleResetButton);

createGrid(gridSize);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${CONTAINER_SIZE / gridSize}px`;
    gridCell.style.height = `${CONTAINER_SIZE / gridSize}px`;
    gridCell.classList.add("gridCell");
    gridCell.addEventListener("mouseenter", () => {
      gridCell.style.backgroundColor = "blue";
    });
    container.appendChild(gridCell);
  }
  return;
}
function handleResetButton() {
  container.replaceChildren();
  createGrid(gridSize);
}
