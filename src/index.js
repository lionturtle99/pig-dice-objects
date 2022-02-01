function Game(runningScore) {
  this.runningScore = runningScore;
  this.currentId = 0;
  this.players = {};
  this.playerTurnBoolean = 1;
}

function die() {
  return Math.floor((Math.random()*6)+1);
}

Game.prototype.playerTurn = function(currentRoll) {
  if (currentRoll === 1) {
    gameBoard.runningScore = 0;
    gameBoard.endTurn();
  }
  else {
    gameBoard.runningScore += currentRoll;
  }
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.endTurn = function() {
  if (this.playerTurnBoolean === true) {
    this.players[1].score += this.runningScore;
    this.playerTurnBoolean = false;
    this.winner();
    this.runningScore = 0;
  } else {
    this.players[2].score += this.runningScore;
    this.playerTurnBoolean = true;
    this.winner();
    this.runningScore = 0;
  }
}

// Game.prototype.endTurn = function() {
//   for (let i = 1; i < this.currentId; i++) {
//     this.players[i].score += this.runningScore;
//     this.winner();
//     this.runningScore = 0;
//   }
// }

Game.prototype.winner = function() {
  Object.keys(gameBoard.players).forEach(function(key) {
    console.log("key: " + key + "gameboard: " + gameBoard.players[key])
    if (gameBoard.players[parseInt(key)].score >= 100) {
      alert("player " + gameBoard.players[parseInt(key)].name + "wins with a score of " + gameBoard.players[parseInt(key)].score + " !!");
    }
  })
}

function Player(score, name) {
  this.score = score;
  this.name = name;
}

function getPlayerTurn() {
  // die()
  if (gameBoard.playerTurnBoolean === true) {
    return "Player1"
  } else {
    return "player2"
  }
}

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