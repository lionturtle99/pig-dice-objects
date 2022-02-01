import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import { Game, Player, getPlayerTurn, die} from "./js/business.js";

let gameBoard = new Game(0,0)
let player1 = new Player(0, "liam")
let player2 = new Player(0, "Daniel")
gameBoard.addPlayer(player1)
gameBoard.addPlayer(player2)

// UI Logic

function updateScores(){
  $("#running-score").text(gameBoard.runningScore);
  $("#p1-score").text(gameBoard.players[1].score);
  $("#p2-score").text(gameBoard.players[2].score);
}

$(document).ready(function() {
  updateScores();
  $("#current-player").text(getPlayerTurn());
  $("button#roll").click(function () {
    let diceRoll = die();
    $("#current-roll").text(diceRoll);
    gameBoard.playerTurn(diceRoll);    
    updateScores();
    $("#current-player").text(getPlayerTurn());
  });

  $("button#end-turn").click(function() {
    gameBoard.endTurn();
    $("#current-roll").text("");
    updateScores();
    $("#current-player").text(getPlayerTurn());
  });

  $("button#reload").click(function(){
    location.reload();
  });
});