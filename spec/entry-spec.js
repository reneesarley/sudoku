import {Game} from '../src/game';

describe ('Game', function() {
  var newArray;
  var failArray;

  beforeEach(function() {

    failArray = new Game(
      [1, 2, 8, 4, 5, 6, 7, 8, 9]);
    failArray.arrayToCheck = [1, 2, 8, 4, 5, 6, 7, 8, 9];

    newArray = new Game(
      // [1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9,
      //  1, 2, 3, 4, 5, 6, 7, 8, 9]);

        [4,2,6,5,7,1,3,9,8,
         8,5,7,2,9,3,1,4,6,
         1,3,9,4,6,8,2,7,5,
         9,7,1,3,8,5,6,2,4,
         5,4,3,7,2,6,8,1,9,
         6,8,2,1,4,9,7,5,3,
         7,9,4,6,3,2,5,8,1,
         2,6,5,8,1,4,9,3,7,
         3,1,8,9,5,7,4,6,2]);

      newArray.arrayToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  it ('should test row contains correct numbers', function() {
    var rowResult = newArray.arrayCheck();
    expect(rowResult).toEqual(true);
    var rowResult = failArray.arrayCheck();
    expect(rowResult).toEqual(false);
  });

  it ('should push all rows to array to check', function() {
    var thisArray = newArray.getAllRows();
    expect (thisArray).toEqual(true)

  });

  it ('should push all cols to array to check', function() {
    var thisArray = newArray.getAllColumns();
    expect (thisArray).toEqual(true)

  });

  it ('should push all boxes to array to check', function() {
    var thisArray = newArray.getAllBoxes();
    expect (thisArray).toEqual(true)

  });

});
