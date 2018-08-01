import {Game} from '../src/game';

describe ('Game', function() {
  let winningGame;
  let incompleteGameBoard;
  let testNewGame = new Game();
  beforeEach(function() {
    // const winningSolution = [4,2,6,5,7,1,3,9,8,
    //                         8,5,7,2,9,3,1,4,6,
    //                         1,3,9,4,6,8,2,7,5,
    //                         9,7,1,3,8,5,6,2,4,
    //                         5,4,3,7,2,6,8,1,9,
    //                         6,8,2,1,4,9,7,5,3,
    //                         7,9,4,6,3,2,5,8,1,
    //                         2,6,5,8,1,4,9,3,7,
    //                         3,1,8,9,5,7,4,6,2]
     winningGame = new Game();
     winningGame.usersSolution = [4,2,6,5,7,1,3,9,8,
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
  });

  it ('should test if set of 9 numbers contains 1-9', function() {
    var rowResult = winningGame.arrayCheck();
    expect(rowResult).toEqual(true);
  });

  it ('should test if set numbers does not contain any duplicates', function() {
    let failingArray = new Game();
    failingArray.arrayToCheck = [9, 9, 1];
    let passingArray = new Game();
    passingArray.arrayToCheck = [9, 8, 7, 6];
    expect(failingArray.arrayCheck()).toEqual(false);
    expect(passingArray.arrayCheck()).toEqual(true);
  });

  // it ('should cycle through each row until it finds a failing combo of numbers', function() {
  //   var result = winningGame.getAllRows(winningGame.usersSolution);
  //   expect (result).toEqual(true);
  //
  // });

  it ('should cycle through each column until it finds a failing combo of numbers ', function() {
    var result = winningGame.checkAllColumns(winningGame.usersSolution);
    expect (result).toEqual(true);

  });

  it ('should cycle through each column until it finds a failing combo of numbers, even if gameboard/solution isnt complete', function() {
    var result = incompleteGameBoard.checkAllColumns(incompleteGameBoard.gameBoard);
    expect (result).toEqual(true);
  });

  it ('should cycle through each box until it finds a failing combo of numbers', function() {
    var thisArray = winningGame.getAllBoxes();
    expect (thisArray).toEqual(true);

  });
  it ('should create an array of 81 numbers, with no duplicates for every row or column', function() {
    testNewGame.makeGameBoard();

    expect (testNewGame.gameBoard.length).toEqual(81);
    expect (testNewGame.getAllRows(testNewGame.gameBoard)).toEqual(true);
    expect (testNewGame.checkAllColumns(testNewGame.gameBoard)).toEqual(true);
  });



});
