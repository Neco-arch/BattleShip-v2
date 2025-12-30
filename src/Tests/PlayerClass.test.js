import { PlayerClass } from "../Js/PlayerClass";

test("RandomPlacement for Computer", () => {
    const Class = new PlayerClass
    Class.RandomPlacementForComputer()
    console.log(Class.ComputerBoard.Ships)
  expect(Class.ComputerBoard.board).toBeDefined();
});