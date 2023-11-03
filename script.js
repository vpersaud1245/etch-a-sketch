const containerToHoldBoard = document.querySelector(".container");

let boardSize = 16;

function createBoardGrid(boardSize) {
  for (let j = 1; j <= boardSize; j++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let i = 1; i <= boardSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridRow.appendChild(square);
    }
    containerToHoldBoard.appendChild(gridRow);
    const boardSquares = document.querySelectorAll(".square");

    for (boardSquare of boardSquares) {
      boardSquare.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "black";
      });
    }
  }
}

function resetBoardGrid() {
  const boardRows = document.querySelectorAll(".gridRow");
  for (row of boardRows) {
    row.remove();
  }
  createBoardGrid(boardSize);
}

createBoardGrid(boardSize);

const resetButton = document.querySelector(".resetGridButton");
resetButton.addEventListener("click", resetBoardGrid);

const changeGridSizeButton = document.querySelector(".changeGridSize");
changeGridSizeButton.addEventListener("click", (e) => {
  boardSize = prompt("Enter board size");
  resetBoardGrid();
});
