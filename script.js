let currentPlayer = "O";
let won = false;
let xWins = 0;
let oWins = 0;

function place(box) {
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  currentPlayer == "O" ? (currentPlayer = "X") : (currentPlayer = "O");
  checkGameBoard();
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
      alert("O is the winner!");
      oWins += 1;
      document.getElementById("O").innerHTML = oWins;
      currentPlayer = "X";
    } else{
      alert("X is the winner!");
      xWins += 1;
      document.getElementById("X").innerHTML = xWins;
      currentPlayer = "O";
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
  won = false;
}
