const container = document.querySelector(".container");
const gridRow = document.createElement("div");
gridRow.style = "display: flex";

for (let i = 1; i <= 16; i++) {
  const boardSquare = document.createElement("div");
  boardSquare.style.border = "solid black";
  boardSquare.style.height = "15px";
  boardSquare.style.width = "15px";
  gridRow.appendChild(boardSquare);
}

for (let i = 1; i <= 16; i++) {
  container.append(gridRow.cloneNode(true));
}
