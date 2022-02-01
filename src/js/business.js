export function Game(runningScore) {
  this.runningScore = runningScore;
  this.currentId = 0;
  this.players = {};
  this.playerTurnBoolean = true;
}

Game.prototype.playerTurn = function(currentRoll) {
  if (currentRoll === 1) {
    this.runningScore = 0;
    // this.endTurn();
  }
  else {
    this.runningScore += currentRoll;
  }
};

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

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
};

// Game.prototype.endTurn = function() {
//   for (let i = 1; i < this.currentId; i++) {
//     this.players[i].score += this.runningScore;
//     this.winner();
//     this.runningScore = 0;
//   }
// }

Game.prototype.winner = function() {
  Object.keys(this.players).forEach(function(key) {
    console.log("key: " + key + "gameboard: " + this.players[key])
    if (this.players[parseInt(key)].score >= 100) {
      alert("player " + this.players[parseInt(key)].name + "wins with a score of " + this.players[parseInt(key)].score + " !!");
    }
  });
};

export function Player(score, name) {
  // this.score = score;
  // this.name = name;
}

export function getPlayerTurn() {
  // die()
  if (this.playerTurnBoolean === true) {
    return "Player1";
  } else {
    return "player2";
  }
}

export function die() {
  return Math.floor((Math.random()*6)+1);
}