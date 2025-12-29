class Dom {
  CreateBoardOnDiv() {
    const playerBoard = document.querySelector(".Player_Board");
    const computerBoard = document.querySelector(".Computer_Board");
    this.CreateBoard10x10(playerBoard);
    this.CreateBoard10x10(computerBoard);
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
}

const Test = new Dom();

Test.CreateBoardOnDiv();

export { Dom };
