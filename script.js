const containerToHoldBoard = document.querySelector(".container");

function createBoardGrid(size) {
  for (let j = 1; j <= size; j++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let i = 1; i <= size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridRow.appendChild(square);
    }
    containerToHoldBoard.appendChild(gridRow);
  }
}

function resetBoardGrid() {
  for (boardSquare of boardSquares) {
    boardSquare.style.backgroundColor = "aqua";
  }
}

createBoardGrid(16);

const boardSquares = document.querySelectorAll(".square");

for (boardSquare of boardSquares) {
  boardSquare.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "black";
  });
}

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  resetBoardGrid();
});
