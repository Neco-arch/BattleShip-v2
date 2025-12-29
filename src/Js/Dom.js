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

  ChangeTurn(CurrentTurn) {

  }

  PlaceShipOnBoard(Column,Row) {

  }
}

const Test = new Dom();

Test.CreateBoardOnDiv();

export { Dom };
