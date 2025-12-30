import { ShipFactory } from "./Shipclass";

class Dom {
  constructor() {
    this.playerBoard = document.querySelector(".Player_Board");
    this.computerBoard = document.querySelector(".Computer_Board");
  }

  //CreateBoard
  CreateBoardOnDiv() {
    this.CreateBoard10x10(this.playerBoard);
    this.CreateBoard10x10(this.computerBoard);
  }

  //CreateBoard 10x10
  CreateBoard10x10(Dom_class) {
    Dom_class.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      const Column = document.createElement("div");
      Column.className = "Column";
      for (let j = 0; j < 10; j++) {
        const Row = document.createElement("div");
        Row.className = "Row";
        Row.dataset.col = i;
        Row.dataset.row = j;
        Column.appendChild(Row);
      }
      Dom_class.appendChild(Column);
    }
  }

  // Reset Board
  ResetBoard() {
    this.CreateBoardOnDiv();
  }

  //Change turn (Background Color)
  ChangeTurn(CurrentTurn) {
    const Player_Side = document.querySelector(".Player_Side");
    const Computer_Side = document.querySelector(".Computer_Side");
    if (CurrentTurn === "Player") {
      Computer_Side.style.backgroundColor = "";
      Player_Side.style.backgroundColor = "rgba(97, 161, 231, 0.25)";
      return "Computer";
    } else if (CurrentTurn === "Computer") {
      Player_Side.style.backgroundColor = "";
      Computer_Side.style.backgroundColor = "rgba(97, 161, 231, 0.25)";
      return "Player";
    }

    return false;
  }

  // Display Player ship
  RenderPlayerBoard(playerBoard) {
    console.log("Hello")
    for (let i = 0 ; i < 10 ; i++) {
      for (let j = 0 ; j < 10 ; j++) {
        if (playerBoard[i][j] instanceof ShipFactory) {
          const cell = playerBoard[i][j]
          cell.style.backgroundColor = "Blue"
        } else {
          continue
        }
      }
    }
  }

  // Make Buttons appear and reappear
  MakeButtonsdisappearandreappear(GameStatus) {
    const Start_Button = document.querySelector(".Start_Game");
    const Randomize_Button = document.querySelector(".Randomize");
    if (GameStatus === "ended") {
      Start_Button.style.display = "block";
      Randomize_Button.style.display = "block";
    }

    if (GameStatus === "Started") {
      A;
      Start_Button.style.display = "None";
      Randomize_Button.style.display = "None";
    }
  }

  // AttackBoard (Change Color Cell board)
  AttackBoard(Element, AttackStatus) {
    if (Element) {
      if (AttackStatus === "hit") {
        Element.style.backgroundColor = "Red";
      }

      if (AttackStatus === "miss") {
        Element.style.backgroundColor = "White";
      }
    }
  }
}
export { Dom };
