import {Game, Player} from "../src/js/business.js";

describe ('Game', () => {
  let currentRoll;
  let newGame;
  let player1;
  beforeEach( () => {
    newGame = new Game(0);
  });
  test('it should create a game object', () => {
    expect(newGame.runningScore).toEqual(0);
    expect(newGame.currentId).toEqual(0);
    expect(newGame.players).toEqual({});
    expect(newGame.playerTurnBoolean).toEqual(true);
  });
  
  test("it should create a new player object", () => {
    player1 = new Player(0, "Jimbob");
    expect(player1.score).toEqual(0);
    expect(player1.name).toEqual("Jimbob");
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

// Game.prototype.addPlayer = function(player) {
//   player.id = this.assignId();
//   this.players[player.id] = player;
// };

// Game.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// export function Player(score, name) {
//   this.score = score;
//   this.name = name;
// }