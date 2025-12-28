import { GameBoard } from "./GameBoards";
import { ShipFactory } from "./Shipclass";

class PlayerClass {
  constructor() {
    this.PlayerBoard = new GameBoard();
    this.ComputerBoard = new GameBoard();
    this.Shiplen = [5, 4, 3, 3, 2];
  }

  // Reset Board for everyplayer
  ResetBoard() {
    this.PlayerBoard = new Array(10).fill(null).map(() => Array(10).fill(null));
    this.ComputerBoard = new Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.PlayerBoard.MissedShot = [];
    this.PlayerBoard.Ships = [];
    this.ComputerBoard.MissedShot = [];
    this.ComputerBoard.Ships = [];
  }

  // Receive attack from another player
  ReceiveAttackFromAnotherPlayer(CurrentTurn, Row, Column) {
    if (CurrentTurn === "Player") {
      const ActiveAttackFun = this.ComputerBoard.receiveAttack(Row, Column);
      if (!ActiveAttackFun) {
        this.ComputerBoard.MissedShot.push([Row, Column]);
      }
      return this.ComputerBoard.AreAllShipSunk();
    }

    if (CurrentTurn === "Computer") {
      const ActiveAttackFun = this.PlayerBoard.receiveAttack(Row, Column);
      if (!ActiveAttackFun) {
        this.ComputerBoard.MissedShot.push([Row, Column]);
      }
      return this.PlayerBoard.AreAllShipSunk();
    }
  }

  // Place Ship for computer
  RandomPlacementForComputer() {
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

  RandomAttackForComputer() {
    
  }


}

export { PlayerClass };
