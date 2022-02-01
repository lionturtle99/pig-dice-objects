import {Game, Player} from "../src/js/business.js";

describe ('Game', () => {
  let currentRoll;
  let newGame;
  let player1;
  beforeEach( () => {
    newGame = new Game(0);
    player1 = new Player(0, "Jimbob");
  });
  test('it should create a game object', () => {
    expect(newGame.runningScore).toEqual(0);
    expect(newGame.currentId).toEqual(0);
    expect(newGame.players).toEqual({});
    expect(newGame.playerTurnBoolean).toEqual(true);
  });
  
  test("it should create a new player object", () => {
    expect(player1.score).toEqual(0);
    expect(player1.name).toEqual("Jimbob");
  });
  test("it should assign an ID to player", () => {
    expect(newGame.assignId()).toEqual(1);
  });
  test("It should assign an id to a player", () => {
    newGame.addPlayer(player1);
    expect(newGame.players[1 /*this is the players id*/].id/*this is also the players id*/).toEqual(999);
  }); 

  test("it should turn runningScore to 0", () => {
    currentRoll = 1;
    newGame.playerTurn(currentRoll);
    expect(newGame.runningScore).toEqual(0);
  });
  test("it should add currentRoll to runningScore", () => {
    currentRoll = 5;
    newGame.playerTurn(currentRoll);
    expect(newGame.runningScore).toEqual(5);
  });
  // test("", () => {
  //   expect().toEqual();
  // });
  // test("", () => {
  //   expect().toEqual();
  // });
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
//     this.winner();
//     this.runningScore = 0;
//   }
// };


