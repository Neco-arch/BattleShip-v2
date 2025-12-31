import { ShipFactory } from "./Shipclass";

class GameBoard {
  constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.MissedShot = [];
    this.Ships = [];
  }

  // Place Ship
  PlaceShip(ship, StartRow, StartColumn, Orientation) {
    const length = ship.length;
    let row, column;
    let Is_Valid = true;

    for (let i = 0; i < length; i++) {
      row = Orientation === "Horizontal" ? StartRow : StartRow + i;
      column = Orientation === "Horizontal" ? StartColumn + i : StartColumn;

      if (row < 0 || row >= 10 || column < 0 || column >= 10) {
        Is_Valid = false;
        break;
      }
      if (this.board[row][column] instanceof ShipFactory) {
        Is_Valid = false;
        break;
      }
    }

    if (Is_Valid) {
      for (let i = 0; i < length; i++) {
        row = Orientation === "Horizontal" ? StartRow : StartRow + i;
        column = Orientation === "Horizontal" ? StartColumn + i : StartColumn;
        this.board[row][column] = ship;
      }
      this.Ships.push(ship);
      return true;
    }
    return false;
  }

  // Receive Attack
  receiveAttack(Row, Column) {
    if (Row < 0 || Row > 9 || Column < 0 || Column > 9) return "Invalid Position";

    if (this.board[Row][Column] instanceof ShipFactory) {
      const ship = this.board[Row][Column];
      ship.hit();
      this.board[Row][Column] = "hit";
      return true;
    } else if (this.board[Row][Column] === null) {
      this.board[Row][Column] = "miss";
      this.MissedShot.push([Row, Column]);
      return false;
    } else {
      // Already hit or miss
      return false;
    }
  }

  AreAllShipSunk() {
    return this.Ships.every(ship => ship.Check_Ship());
  }
}

export { GameBoard };
