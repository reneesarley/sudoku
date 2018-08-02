import {Game} from '../src/game';

describe ('Game', function() {
  let winningGame;
  let incompleteGameBoard;
  let twoRowGameBoard;
  let twoRowGameBoardFail;
  let oneRowGameBoard;
  let oneRowGameBoardFail;
  let testNewGame = new Game();
  beforeEach(function() {
     winningGame = new Game();
     winningGame.usersSolution = [ 4,2,6,5,7,1,3,9,8,
                                   8,5,7,2,9,3,1,4,6,
                                   1,3,9,4,6,8,2,7,5,
                                   9,7,1,3,8,5,6,2,4,
                                   5,4,3,7,2,6,8,1,9,
                                   6,8,2,1,4,9,7,5,3,
                                   7,9,4,6,3,2,5,8,1,
                                   2,6,5,8,1,4,9,3,7,
                                   3,1,8,9,5,7,4,6,2]
     winningGame.arrayToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];

     incompleteGameBoard = new Game();
     incompleteGameBoard.gameBoard = [4,2,6,5,7,1,3,9,8,
                                     8,5,7,2,9,3,1,4,6,
                                     1,3,9,4,6,8,2,7,5,
                                     9,7,1,3,8,5,6,2,4,
                                     5,4,3,7,2,6,8,1,9,
                                     6,8,2,1,4,9,7,5,3,
                                     7,9,4,6,3,2,5,8,1,
                                     2,6,5,8,1,4,9,3,7]
     twoRowGameBoard= new Game();
     twoRowGameBoard.gameBoard = [4,2,6,5,7,1,3,9,8,
                                  8,5,7,2,9,3,1,4,6]
      twoRowGameBoardFail= new Game();
      twoRowGameBoardFail.gameBoard = [4,2,6,5,7,1,3,9,8,
                                       8,5,7,2,9,3,1,4,8]
      oneRowGameBoard= new Game();
      oneRowGameBoard.gameBoard = [4,2,6,5,7,1,3,9,8]

      oneRowGameBoardFail= new Game();
      oneRowGameBoardFail.gameBoard = [4,2,6,5,7,1,3,9,9]
  });

  it ('should test if set numbers does not contain any duplicates', function() {
    let failingArray = new Game();
    failingArray.arrayToCheck = [9, 9, 1];
    let passingArray = new Game();
    passingArray.arrayToCheck = [9, 8, 7, 6];
    expect(failingArray.arrayCheck()).toEqual(false);
    expect(passingArray.arrayCheck()).toEqual(true);
  });

  it ('should cycle through each row until it finds a failing combo of numbers', function() {
    var result = winningGame.getAllRows(winningGame.usersSolution);
    expect (result).toEqual(true);

  });

  it ('should cycle through each column until it finds a failing combo of numbers ', function() {
    var result = winningGame.checkAllColumns(winningGame.usersSolution);
    expect (result).toEqual(true);
  });

  it ('should cycle through each column until it finds a failing combo of numbers, even if gameboard/solution isnt complete', function() {
    var result = incompleteGameBoard.checkAllColumns(incompleteGameBoard.gameBoard);
    let failResult = twoRowGameBoardFail.checkAllColumns(twoRowGameBoardFail.gameBoard);
    expect (result).toEqual(true);
    expect(failResult).toEqual(false);
  });

  it ('should check each box for a failing combo of numbers', function() {
    var result = winningGame.getAllBoxes(winningGame.usersSolution);
    let failResult = twoRowGameBoardFail.getAllBoxes(twoRowGameBoardFail.gameBoard);
    expect (result).toEqual(true);
    expect (failResult).toEqual(false);
  });

  it ('should check each box even if only 1 row of the box are filled out', function() {
    var result = oneRowGameBoard.getAllBoxes(oneRowGameBoard.gameBoard);
    expect (result).toEqual(true);
    var resultFail = oneRowGameBoardFail.getAllBoxes(oneRowGameBoardFail.gameBoard);
    expect (resultFail).toEqual(false);
  });

  it ('should check each box even if only 2 row of the box are filled out', function() {
    var result = twoRowGameBoard.getAllBoxes(twoRowGameBoard.gameBoard);
    expect (result).toEqual(true);
    var resultFail = twoRowGameBoardFail.getAllBoxes(twoRowGameBoardFail.gameBoard);
    expect (resultFail).toEqual(false);
  });

  it ('should test array to see if all rows, columns and boxes are 1-9 with no duplicates', function(){
    let result = winningGame.solution(winningGame.usersSolution);
    expect(result).toEqual(true);
  });

  it ('should create an array of 81 numbers, with no duplicates in every row and column', function() {
    testNewGame.makeGameBoard();
    // expect (testNewGame.gameBoard.length).toEqual(81);
    expect (testNewGame.solution(testNewGame.gameBoard)).toEqual(true);
  });

//

});
