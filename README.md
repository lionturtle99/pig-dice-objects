WE need a constructor for the players, those properties might be: score and id.
a constructor for the game play, properties might be: current roll, who's turn it is (use a boolean for two players), 

function Game(currentRoll, currentScore, players, currentId, playerTurn) {
  this.currentRoll = currentRoll;
  this.currentScore = currentScore;
  this.players = {};
  this.currentId = 0;
  this.playerTurn = playerTurnBoolean;
}

function Player(score, name) {
  this.score = score;
  this.name = name;
}

function die() {
  Math.floor((Math.random()*6)+1);
}
  
function playerTurn() {
  if (currentRoll === 1) {
    currentRoll = 0;
    endTurn();
  }
  else {
    runningScore += currentRoll;
  }
}

endTurn() {
  if (this.playerTurnBoolean === true) {
    this.players.player1.score += this.runningScore;
    this.playerTurnBoolean = !playerTurnBoolean;
    this.winner();
    this.runningScore = 0;
  } else {
    this.players.player2.score += this.runningScore;
    this.playerTurnBoolean = !playerTurnBoolean;
    this.winner();
    this.runningScore = 0;
  }
}

function winner(gameBoard) {
  this needs loop through the players score to see if theres a winner every time the end turn function is called;
  object.keys(gameBoard.players).forEach(function(key) {
    if (gameBoard.players[key].score <= 100) {
      alert ("player " + gameBoard.players[key].id + "wins with a score of " + gameBoard.players[key].score + " !!");
    }
  })
}

Game.prototype.addPlayer = function(players) {
  players.id = this.assignId();
  this.currentId[players.id] = players;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
} 

--- Describe die() ---

Test: It should return an integer from 1 - 6
Code: 
  function die() {
    return Math.floor((Math.random()*6)+1);
  }
Expected Output: An integer 1-6


--- Describe Game(); ---

Test: It should create a new object with the correct values
Code: let scoreBoard = new Game(players, currentRoll, currentScore);
Expected Output:
  gameBoard {
    players = {};
    currentRoll = currentRoll;
    currentScore = currentScore;
    playerTurnBoolean = true;
    currentId = 0;
  }

--- Describe Player() ---

Test: It should create an object with the correct values
Code: let player1 = new Player(name, 0);
Expected Output: player{name = Liam; score = 0;}

--- Describe Game prototypes ---

Test: It should add players to the game object
Code: gameBoard.addPlayer(player1);
Expected Output: gameBoard.players{player1:, player2:}

Test: It should end a players turn if they roll a 1 or add their roll to that players running score if they anything else
Code: 
  Game.prototype.playerTurn() {
    if (this.currentRoll === 1) {
      this.runningScore = 0;
    }
    else {
      this.runningScore += this.currentRoll;
    }
  }
Expected Output: runningScore = (2-6)

Test: It should check to see who's turn it is and then add runningScore to the players score
Code: 
  Game.prototype.endTurn() {
    if (this.playerTurnBoolean === true) {
      this.players.player1.score += this.runningScore;
      this.runningScore = 0;
    } else {
      this.players.player2.score += this.runningScore;
      this.runningScore = 0;
    }
  }
Expected Output: gameBoard.players.player1.score = 14

Test: it should switch the playerTurnBoolean to true or false
Code:
  Game.prototype.endTurn() {
    if (this.playerTurnBoolean === true) {
      this.players.player1.score += this.runningScore;
      this.playerTurnBoolean = !playerTurnBoolean;
      this.runningScore = 0;
    } else {
      this.players.player2.score += this.runningScore;
      this.playerTurnBoolean = !playerTurnBoolean;
      this.runningScore = 0;
    }
  }
Expected Output: gameBoard.playerTurnBoolean = true or false

Test: It should loop through the players score every round to check to if their score is over the 100
Code:
  Game.prototype.winner(gameBoard) {
    object.keys(gameBoard.players).forEach(function(key) {
      if (gameBoard.players[key].score <= 100) {
        alert (gameBoard.players[key] + " wins with a score of " + gameBoard.players[key].score + " !!");
      }
    })
  };
Expected Output: "Player1 wins with a score of 100 !!"

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)
