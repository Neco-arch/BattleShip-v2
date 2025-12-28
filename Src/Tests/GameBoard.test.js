import { GameBoard } from "../Js/GameBoards";
import { ShipFactory } from "../Js/Shipclass";

test("CreateBoard", () => {
  const board = new GameBoard();
  expect(board).toBeDefined();
});

test("PlaceShip", () => {
  const boardclass = new GameBoard();
  const Ship_3 = new ShipFactory(3);

  boardclass.PlaceShip(Ship_3, 1, 9, "Horizontal");
  expect(boardclass.board).toBeDefined();
});

test("Test Attack", () => {
  const boardclass = new GameBoard();
  const Ship_3 = new ShipFactory(3);

  boardclass.PlaceShip(Ship_3, 0, 0, "Horizontal");
  boardclass.receiveAttack(0, 0);

  expect(boardclass.board[0][0]).toBe("hit");
});

test("PlaceShip On 9 col and 9 row", () => {
  const boardclass = new GameBoard();
  const Ship = new ShipFactory(1);

  boardclass.PlaceShip(Ship, 9, 9, "Horizontal");
  boardclass.receiveAttack(9, 9);

  expect(boardclass.board[9][9]).toBe("hit");
});

test("PlaceShipVertical", () => {
  const boardclass = new GameBoard();
  const Ship = new ShipFactory(3);

  boardclass.PlaceShip(Ship, 3, 3, "Vertical");
  expect(boardclass.board[4][3]).toBe(Ship);
});

test("Game End ", () => {
  const boardclass = new GameBoard();
  const Ship = new ShipFactory(1);

  boardclass.PlaceShip(Ship, 9, 9, "Horizontal");
  boardclass.receiveAttack(9, 9);

  expect(boardclass.AreAllShipSunk()).toBe(true);
});
