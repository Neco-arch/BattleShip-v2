import { GameBoard } from "./GameBoards";
import { ShipFactory } from "./Shipclass";

class PlayerClass {
  constructor() {
    this.PlayerBoard = new GameBoard();
    this.ComputerBoard = new GameBoard();
    this.Shiplen = [5, 4, 3, 3, 2];
    this.CurrentTurn = "Player";
  }

  StartGame() {
    this.ResetBoardForComputer();
    this.ResetBoardForPlayer();
    this.CurrentTurn = "Player";
  }

  ResetBoardForComputer() {
    this.ComputerBoard = new GameBoard();
  }

  ResetBoardForPlayer() {
    this.PlayerBoard = new GameBoard();
  }

  ReceiveAttackFromAnotherPlayer(Row, Column) {
    let boardToAttack;
    let nextTurn;

    if (this.CurrentTurn === "Player") {
      boardToAttack = this.ComputerBoard;
      nextTurn = "Computer";
    } else {
      boardToAttack = this.PlayerBoard;
      nextTurn = "Player";
    }

    const result = boardToAttack.receiveAttack(Row, Column);
    this.CurrentTurn = nextTurn;
    return result ? "hit" : "miss";
  }

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

  RandomPlacementForPlayer() {
    for (let i = 0; i < this.Shiplen.length; i++) {
      const ship = new ShipFactory(this.Shiplen[i]);
      let placed = false;

      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);
        const orientation = Math.random() > 0.5 ? "Horizontal" : "Vertical";
        placed = this.PlayerBoard.PlaceShip(ship, row, column, orientation);
      }
    }
  }

  RandomAttackForComputer() {
    let attacked = false;

    while (!attacked) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);

      if (
        this.PlayerBoard.board[row][col] !== "hit" &&
        this.PlayerBoard.board[row][col] !== "miss"
      ) {
        const result = this.ReceiveAttackFromAnotherPlayer(row, col);
        attacked = true;
        return { row, col, result };
      }
    }
  }
}

export { PlayerClass };
