CONTAINER_SIZE = 960;
function createGrid(gridSize = 16) {
  const container = document.querySelector(".container");
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${CONTAINER_SIZE / gridSize}px`;
    gridCell.style.height = `${CONTAINER_SIZE / gridSize}px`;
    gridCell.classList.add("gridCell");
    container.appendChild(gridCell);
  }
  return;
}

createGrid(16);
