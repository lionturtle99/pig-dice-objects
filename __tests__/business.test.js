import {Game} from "../src/js/business.js";

describe ('Game', () => {

  test('it should create a game object', () => {
    const newGame = new Game(0);
    expect(newGame.runningScore).toEqual(0);
    expect(newGame.currentId).toEqual(0);
    expect(newGame.players).toEqual({});
    expect(newGame.playerTurnBoolean).toEqual(1);
  });
});