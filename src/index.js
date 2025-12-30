import { PlayerClass } from "./Js/PlayerClass";
import { ShipFactory } from "./Js/Shipclass";
import { Dom } from "./Js/Dom";
import "./Style.css";

(() => {
  const AllPlayer = new PlayerClass();
  const DomController = new Dom();

  document.addEventListener("DOMContentLoaded", () => {
    DomController.CreateBoardOnDiv(AllPlayer);
  });

  document.querySelector(".Start_Game").addEventListener("click", () => {
    AllPlayer.StartGame();
    AllPlayer.ResetBoardForComputer()
    AllPlayer.RandomPlacementForPlayer()
    AllPlayer.RandomPlacementForComputer();
  });

  document.querySelector(".Randomize").addEventListener("click" , () => {
    AllPlayer.ResetBoardForPlayer();
    AllPlayer.RandomPlacementForPlayer();
  })
})();
