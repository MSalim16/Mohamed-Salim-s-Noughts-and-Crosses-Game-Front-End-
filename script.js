let currentPlayer = "O";
let won = false;
let xWins = 0;
let oWins = 0;
const cells = {};
let availableCells = [];
let mode = "twoPlayer";

function changeMode() {
  mode = mode === "twoPlayer" ? "onePlayer" : "twoPlayer";
  console.log(mode);
}

function updateCells() {
  [...document.getElementsByClassName("grid-item")].forEach((item) => {
    cells[item.id] = item.innerText;
  });
  availableCells = [...document.getElementsByClassName("grid-item")].filter(
    (gridSpace) => {
      return gridSpace.innerText === "";
    }
  );
}

function place(box) {
  console.log(box);
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  currentPlayer == "O" ? (currentPlayer = "X") : (currentPlayer = "O");
  updateCells();
  checkGameBoard();
  if (mode === "onePlayer" && currentPlayer === "X") {
    const aiChoice =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    place(aiChoice);
  }
}

function checkGameBoard() {
  for (var i = 0; i <= 2; i++) {
    checkWinner(
      document.getElementById(i + "_0").innerText,
      document.getElementById(i + "_1").innerText,
      document.getElementById(i + "_2").innerText
    );
    checkWinner(
      document.getElementById("0_" + i).innerText,
      document.getElementById("1_" + i).innerText,
      document.getElementById("2_" + i).innerText
    );
  }

  checkWinner(
    document.getElementById("0_0").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_2").innerText
  );
  checkWinner(
    document.getElementById("0_2").innerText,
    document.getElementById("1_1").innerText,
    document.getElementById("2_0").innerText
  );
}
function checkWinner(first, second, third) {
  if (first != "" && first == second && first == third) {
    won = true;
    if (first === "O") {
      if (window.confirm("O is the winner, do you want to reset the board?")) {
        oWins += 1;
        document.getElementById("O").innerHTML = oWins;
        currentPlayer = "X";

        reset();
      } else {
        oWins += 1;
        document.getElementById("O").innerHTML = oWins;
        currentPlayer = "X";
      }
    } else {
      if (window.confirm("X is the winner, do you want to reset the board?")) {
        xWins += 1;
        document.getElementById("X").innerHTML = xWins;
        currentPlayer = "O";
        reset();
      } else {
        xWins += 1;
        document.getElementById("X").innerHTML = xWins;
        currentPlayer = "O";
      }
     
      //resets all of the boxes to an empty string
    }
  }
}

function reset() {
  //resets all of the boxes to an empty string
  document.getElementById("0_0").innerText = "";
  document.getElementById("0_1").innerText = "";
  document.getElementById("0_2").innerText = "";
  document.getElementById("1_0").innerText = "";
  document.getElementById("1_1").innerText = "";
  document.getElementById("1_2").innerText = "";
  document.getElementById("2_0").innerText = "";
  document.getElementById("2_1").innerText = "";
  document.getElementById("2_2").innerText = "";
  updateCells();
  won = false;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerText === "Two Player";
});
