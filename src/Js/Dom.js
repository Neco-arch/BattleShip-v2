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

  PlaceShipOnBoard(Column, Row) {}

  MakeStartButtondisappearandreappear() {
    
  }
}

const Test = new Dom();

Test.CreateBoardOnDiv();
Test.ChangeTurn("Player");

setTimeout(function () {
  Test.ChangeTurn("Computer");
  console.log("Hello");
}, 5000);

export { Dom };
