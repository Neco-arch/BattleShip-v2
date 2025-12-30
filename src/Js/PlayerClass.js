import { GameBoard } from "./GameBoards";
import { ShipFactory } from "./Shipclass";

class PlayerClass {
  constructor() {
    this.PlayerBoard = new GameBoard();
    this.ComputerBoard = new GameBoard();
    this.Shiplen = [5, 4, 3, 3, 2];
    this.CurrentTurn = null;
  }

  StartGame() {
    this.ResetBoard();
    this.CurrentTurn = "Player";
  }

  // Reset Computer board
ResetBoardForComputer() {
  this.ComputerBoard.board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  this.ComputerBoard.MissedShot = [];
  this.ComputerBoard.Ships = [];
}
// Reset Player board
ResetBoardForPlayer() {
  this.PlayerBoard.board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  this.PlayerBoard.MissedShot = [];
  this.PlayerBoard.Ships = [];
}

  // Receive attack from another player
  ReceiveAttackFromAnotherPlayer(Row, Column) {
    if (this.CurrentTurn === "Player") {
      const ActiveAttackFun = this.ComputerBoard.receiveAttack(Row, Column);
      if (!ActiveAttackFun) {
        this.ComputerBoard.MissedShot.push([Row, Column]);
      }
      return this.ComputerBoard.AreAllShipSunk();
    }

    if (this.CurrentTurn === "Computer") {
      const ActiveAttackFun = this.PlayerBoard.receiveAttack(Row, Column);
      if (!ActiveAttackFun) {
        this.ComputerBoard.MissedShot.push([Row, Column]);
      }
      return this.PlayerBoard.AreAllShipSunk();
    }
  }

  // Place Ship for Computer Player
  RandomPlacementForComputer() {
    this.ResetBoardForComputer();
    for (let i = 0; i < this.Shiplen.length; i++) {
      const ship = new ShipFactory(this.Shiplen[i]);
      let placed = false;

      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);
        const orientation = Math.random() > 0.5 ? "Horizontal" : "Vertical";

        placed = this.ComputerBoard.PlaceShip(ship, row, column, orientation);
      }
    }
  }

  //Random Attack for Computer Player
  RandomAttackForComputer() {
    this.ResetBoardForComputer()
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    this.ReceiveAttackFromAnotherPlayer("Computer", row, column);
  }

  // Random Placement for player (Optional)
  RandomPlacementForPlayer() {
    for (let i = 0; i < this.Shiplen.length; i++) {
      const ship = new ShipFactory(this.Shiplen[i]);
      let placed = false;
      
      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);
        const orientation = Math.random() > 0.5 ? "Horizontal" : "Vertical";
        console.log(this.PlayerBoard.PlaceShip)
      }
  }
}
}

export { PlayerClass };
