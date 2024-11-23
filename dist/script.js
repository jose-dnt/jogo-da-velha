let tabela = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];
let player = "X";
let turno = 1;
let isOver = false;
const resetButton = document.getElementById("reset");
// resetButton.style.visibility = "hidden";

function atualizarTabela() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.getElementById("c" + i + "l" + j).innerHTML =
        tabela[j - 1][i - 1];
    }
  }
}

function checarGanhador() {
  for (let i = 0; i < 3; i++) {
    if (
      tabela[i][0] === player &&
      tabela[i][1] === player &&
      tabela[i][2] === player
    ) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      tabela[0][i] === player &&
      tabela[1][i] === player &&
      tabela[2][i] === player
    ) {
      return true;
    }
  }
  if (
    tabela[0][0] === player &&
    tabela[1][1] === player &&
    tabela[2][2] === player
  ) {
    return true;
  } else if (
    tabela[0][2] === player &&
    tabela[1][1] === player &&
    tabela[2][0] === player
  ) {
    return true;
  } else return false;
}

atualizarTabela();

function myfunction(col, row) {
  row -= 1;
  col -= 1;
  if (turno > 9 || isOver) {
    resetButton.style.visibility = "visible";
    return;
  }
  if (tabela[row][col] !== " ") {
    alert(tabela[row][col]);
    return;
  }
  turno++;
  tabela[row][col] = player;
  let ganhador = checarGanhador();

  atualizarTabela();

  if (ganhador) {
    alert(player + " ganhou!");
    isOver = true;
    resetButton.style.visibility = "visible";
  } else if (turno > 9) {
    alert("Deu velha!");
    isOver = true;
    resetButton.style.visibility = "visible";
  }

  player = player === "X" ? "O" : "X";
}

function reset() {
  tabela = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];
  player = "X";
  turno = 1;
  isOver = false;
  atualizarTabela()
  resetButton.style.visibility = "hidden";
}