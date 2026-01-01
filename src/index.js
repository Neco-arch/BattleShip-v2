import { PlayerClass } from "./Js/PlayerClass";
import { Dom } from "./Js/Dom";
import "./Style.css";

(() => {
  const AllPlayer = new PlayerClass();
  const DomController = new Dom();
  const Restart_Button = document.querySelector(".Restart_Button");
  const Dialog = document.getElementById("gameEnded");
  const Helper = document.querySelector(".Helper")

  document.addEventListener("DOMContentLoaded", () => {
    DomController.CreateBoardOnDiv();
  });

  Restart_Button.addEventListener("click", () => {
    Dialog.close();
    DomController.CreateBoardOnDiv();
    AllPlayer.RandomPlacementForComputer();
    DomController.MakeButtonsdisappearandreappear("Ended");
    Helper.style.display = "block"
  });

  document.querySelector(".Start_Game").addEventListener("click", () => {
    AllPlayer.StartGame();
    DomController.SwitchSide(AllPlayer.CurrentTurn);
    AllPlayer.RandomPlacementForComputer();
    DomController.MakeButtonsdisappearandreappear("Started");
    DomController.RenderPlayerBoard(AllPlayer.PlayerBoard.board);

    document.querySelectorAll(".Computer_Board .Row").forEach((cell) => {
      let Clicked = false;
      cell.addEventListener("click", (e) => {
        if (
          AllPlayer.ComputerBoard.AreAllShipSunk() === true ||
          AllPlayer.ComputerBoard.AreAllShipSunk() === true
        ) {
          console.log("Game ended");
          Dialog.showModal();
        }
        if (AllPlayer.CurrentTurn !== "Player") return;
        if (!Clicked) {
          const Row = parseInt(e.target.dataset.row);
          const Col = parseInt(e.target.dataset.col);
          const result = AllPlayer.ReceiveAttackFromAnotherPlayer(Row, Col);
          DomController.AttackBoard(e.target, result);
          DomController.SwitchSide(AllPlayer.CurrentTurn);
          Clicked = true;
        }

        // AI attacks automatically
        if (AllPlayer.CurrentTurn === "Computer") {
          setTimeout(() => {
            const aiAttack = AllPlayer.RandomAttackForComputer();
            const cellToAttack = document.querySelector(
              `.Player_Board .Row[data-row="${aiAttack.row}"][data-col="${aiAttack.col}"]`
            );
            DomController.AttackBoard(cellToAttack, aiAttack.result);
            DomController.SwitchSide(AllPlayer.CurrentTurn);
          }, 500);
        }
      });
    });
  });

  document.querySelector(".Randomize").addEventListener("click", () => {
    Helper.style.display = "none"
    DomController.ResetBoard();
    AllPlayer.ResetBoardForPlayer();
    AllPlayer.RandomPlacementForPlayer();
    DomController.RenderPlayerBoard(AllPlayer.PlayerBoard.board);
    DomController.ShowStartButton();
  });
})();
