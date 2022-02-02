import {Game, Player} from "../src/js/business.js";

describe ('Game', () => {
  let currentRoll;
  let firstGame;
  let secondGame;
  let player1;
  let player2
  beforeEach( () => {
    firstGame = new Game(5/*this is the runningScore*/);
    player1 = new Player(0, "Jimbob");
  });
  test('it should create a game object', () => {
    expect(firstGame.runningScore).toEqual(5);
    expect(firstGame.currentId).toEqual(0);
    expect(firstGame.players).toEqual({});
    expect(firstGame.playerTurnBoolean).toEqual(true);
  });
  
  test("it should create a new player object", () => {
    expect(player1.score).toEqual(0);
    expect(player1.name).toEqual("Jimbob");
  });
  test("it should assign an ID to player", () => {
    expect(firstGame.assignId()).toEqual(1);
  });

  beforeEach(() => {
    secondGame = new Game(0/*this is the runningScore*/)
    player2 = new Player(0, "Gabby");
    secondGame.addPlayer(player1);
    secondGame.addPlayer(player2);
  })
  test("It should assign an id to a player", () => {
    expect(secondGame.players[1 /*this is the players id*/].id/*this is also the players id*/).toEqual(1);
  });
  test("it should turn runningScore to 0", () => {
    currentRoll = 1;
    secondGame.playerTurn(currentRoll);
    expect(secondGame.runningScore).toEqual(0);
  });
  test("it should add currentRoll to runningScore", () => {
    currentRoll = 5;
    secondGame.playerTurn(currentRoll);
    expect(secondGame.runningScore).toEqual(5);
  });
  test("It should add runningScore to player1's score and change the playerTurnBoolean to false and reset running score to 0", () => {
    currentRoll = 5;
    secondGame.playerTurn(currentRoll);
    secondGame.endTurn();
    expect(secondGame.players[1].score).toEqual(5);
    expect(secondGame.playerTurnBoolean).toEqual(false);
    expect(secondGame.runningScore).toEqual(0);
  });
  test("It should add runningScore to player2's score and change the playerTurnBoolean to false and reset running score to 0", () => {
    currentRoll = 5;
    secondGame.playerTurn(currentRoll);
    secondGame.playerTurnBoolean = false;
    secondGame.endTurn();
    expect(secondGame.players[2].score).toEqual(5);
    expect(secondGame.playerTurnBoolean).toEqual(true);
    expect(secondGame.runningScore).toEqual(0);
  });
});


// Game.prototype.endTurn = function() {
//   if (this.playerTurnBoolean === true) {
//     this.players[1].score += this.runningScore;
//     this.playerTurnBoolean = false;
//     // this.winner();
//     this.runningScore = 0;
//   } else {
//     this.players[2].score += this.runningScore;
//     this.playerTurnBoolean = true;
//     // this.winner();
//     this.runningScore = 0;
//   }
// };


