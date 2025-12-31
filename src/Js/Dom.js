import { ShipFactory } from "./Shipclass";

class Dom {
  constructor() {
    this.playerBoard = document.querySelector(".Player_Board");
    this.computerBoard = document.querySelector(".Computer_Board");
  }

  CreateBoardOnDiv() {
    this.CreateBoard10x10(this.playerBoard);
    this.CreateBoard10x10(this.computerBoard);
  }

  CreateBoard10x10(Dom_class) {
    Dom_class.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      const Column = document.createElement("div");
      Column.className = "Cell Column";
      for (let j = 0; j < 10; j++) {
        const Row = document.createElement("div");
        Row.className = "Cell Row";
        Row.dataset.col = i;
        Row.dataset.row = j;
        Column.appendChild(Row);
      }
      Dom_class.appendChild(Column);
    }
  }

  SwitchSide(CurrentTurn) {
    const PlayerSide = document.querySelector(".Player_Side");
    const ComputerSide = document.querySelector(".Computer_Side");

    PlayerSide.style.backgroundColor = "";
    ComputerSide.style.backgroundColor = "";

    if (CurrentTurn === "Player") {
      PlayerSide.style.backgroundColor = "#6f6c6cff";
    } else if (CurrentTurn === "Computer") {
      ComputerSide.style.backgroundColor = "#6f6c6cff";
    }
  }

  RenderPlayerBoard(playerBoard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = playerBoard[i][j];
        if (cell instanceof ShipFactory) {
          const StyleCell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
          StyleCell.style.backgroundColor = "blue";
        }
      }
    }
  }

  ResetBoard() {
    this.CreateBoardOnDiv();
  }

  MakeButtonsdisappearandreappear(GameStatus) {
    const Start_Button = document.querySelector(".Start_Game");
    const Randomize_Button = document.querySelector(".Randomize");

    if (GameStatus === "ended") {
      Start_Button.style.display = "block";
      Randomize_Button.style.display = "block";
    } else if (GameStatus === "Started") {
      Start_Button.style.display = "none";
      Randomize_Button.style.display = "none";
    }
  }

  ShowStartButton() {
    const Start_Button = document.querySelector(".Start_Game");
    Start_Button.style.display = "block";
  }

  AttackBoard(Element, AttackStatus) {
    if (Element) {
      if (AttackStatus === "hit") {
        Element.style.backgroundColor = "red";
      } else if (AttackStatus === "miss") {
        Element.style.backgroundColor = "grey";
      }
    }
  }
}

export { Dom };
