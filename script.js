let boxs = document.querySelectorAll(".box");
let Resetbtn = document.querySelector(".Reset-button");
let result = document.querySelector(".result");
let newgame = document.querySelector(".new-game");
let checkwin = false; // last case kasaile jitisake paxi matra true hunxa
let turn0 = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetbtn = () => {
  Enableboxes();
  newgame.style.display = "none";
  result.innerHTML = "";
  checkwin = false;
  player1Moves = []; // Reset player1Moves array
  player2Moves = []; // Reset player2Moves array
};

const disabledboxes = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};
const Enableboxes = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerHTML = ""; // Interesting part
    checkwin = false;
  }
};
/********** **************/
/*** removing old moves ***/
let player1Moves = [];
let player2Moves = [];

const removeOldestMove = (playerMoves) => {
  console.log("playerMoves count >>>>>>", playerMoves.length);
  if (playerMoves.length >= 4) {
    const oldestMoveIndex = playerMoves.shift();
    console.log("chceckwin value before", checkwin);

    setTimeout(() => {
      if (checkwin === false) {
        boxs[oldestMoveIndex].classList.add("fade-out");
        setTimeout(() => {
          boxs[oldestMoveIndex].innerHTML = "";
          boxs[oldestMoveIndex].disabled = false;
          boxs[oldestMoveIndex].classList.remove("fade-out");
        }, 300);
      }
    }, 600);
  }
};
/*** removing old moves ***/
/********** End **************/

boxs.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log("You clicked the box");
    if (turn0) {
      // Player 1's turn
      box.innerHTML = "O";
      player1Moves.push(index);
      removeOldestMove(player1Moves);
      turn0 = false;
    } else {
      // Player 2's turn
      box.innerHTML = "X";
      player2Moves.push(index);
      removeOldestMove(player2Moves);
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);

    let position1 = boxs[pattern[0]].innerHTML;
    let position2 = boxs[pattern[1]].innerHTML;
    let position3 = boxs[pattern[2]].innerHTML;
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        if (position1 === "O") {
          result.innerHTML = "Player 1 is the winner";
          disabledboxes(); // Function defined above
        } else {
          result.innerHTML = "Player 2 is the winner";
          disabledboxes();
        }
        checkwin = true;
        newgame.style.display = "inline";
      }
    }
  }
};

Resetbtn.addEventListener("click", resetbtn);
newgame.addEventListener("click", resetbtn);
