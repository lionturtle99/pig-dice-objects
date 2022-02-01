import {Game, Player} from "../src/js/business.js";

describe ('Game', () => {
  test('it should create a game object', () => {
    let newGame = new Game(0);
    expect(newGame.runningScore).toEqual(0);
    expect(newGame.currentId).toEqual(0);
    expect(newGame.players).toEqual({});
    expect(newGame.playerTurnBoolean).toEqual(1);
  });
  let currentRoll;
  let newGame;
  beforeEach( () => {
    newGame = new Game(12);
  });
  test("it should turn runningScore to 0", () => {
    currentRoll = 1;
    expect(newGame.playerTurn(currentRoll)).toEqual(0);
  });
  test("it should add currentRoll to runningScore", () => {
    currentRoll = 5;
    expect(newGame.playerTurn(currentRoll)).toEqual(17);
  });
});


