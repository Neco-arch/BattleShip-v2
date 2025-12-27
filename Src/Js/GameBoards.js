class GameBoard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.MissedShot = [];
    this.Ships = [];
  }

  // Check Position
  PlaceShip(ship, StartRow, StartColumn, Orientation) {
    const length = ship.length; // Ship length
    let row;
    let column;
    let Is_Valid = true;

    // Calculate Condition
    for (let i = 0; i < length; i++) {
      if (Orientation === "Horizontal") {
        row = StartRow + i;
        column = StartColumn;
      }
      if (Orientation === "Vertical") {
        row = StartRow;
        column = StartColumn + i;
      }

      if (row < 0 || row >= 10 || column < 0 || column >= 10) {
        Is_Valid = false;
        break;
      }

      if (this.board[column][row] === ship) {
        Is_Valid = false;
        break;
      }
    }

    // Place Ship
    if (Is_Valid) {
      for (let j = 0; j < length; j++) {
        if (Orientation === "Horizontal") {
          row = StartRow + i;
          column = StartColumn;
        }

        if (Orientation === "Vertical") {
          row = StartRow;
          column = StartColumn + i;
        }

        this.board[column][row] = ship;

        this.Ships.push(ship);
      }
    }
  }

  // ReceiveAttack
  receiveAttack(Row, Column) {
    if (Row > 9 || Row < 0 || Column > 9 || Column < 0) {
      return;
    }

    if (this.board[Row][Column] === ship) {
      const Shipclass = ship;
      Shipclass.hit();
      this.board[Row][Column] = "hit"
      if (Shipclass.Check_Ship() === "Sunk") {

      }
    }
    if (this.board[Row][Column] !== ship) {
      this.board[Row][Column] === "miss";
      this.MissedShot.push([Row, Column]);
    }
  }

  AreAllShipSunk() {
    return this.Ships.every(ship => ship.isSunk());
  }
}

export { GameBoard }
