import { PlayerClass } from "../Js/PlayerClass";

test("RandomPlacement for Computer", () => {
    const Class = new PlayerClass
    Class.RandomPlacementForComputer()
    console.log(Class.ComputerBoard.board)
  expect(Class.ComputerBoard.board).toBeDefined();
});