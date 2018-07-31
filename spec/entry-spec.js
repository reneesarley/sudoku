import {Game} from '../src/game';

describe ('Game', function() {
  var newArray;
  var failArray;

  beforeEach(function() {

    failArray = new Game(
      [1, 2, 8, 4, 5, 6, 7, 8, 9]);
    failArray.arrayToCheck = [1, 2, 8, 4, 5, 6, 7, 8, 9];

    newArray = new Game(
      [1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9,
       1, 2, 3, 4, 5, 6, 7, 8, 9]);

      newArray.arrayToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  it ('should test row contains correct numbers', function() {
    var rowResult = newArray.arrayCheck();
    expect(rowResult).toEqual(true);
    var rowResult = failArray.arrayCheck();
    expect(rowResult).toEqual(false);
  });


  it ('should push all values to array to check', function() {
    var thisArray = newArray.getAllRows();
    // console.log(thisArray);
    expect (thisArray).toEqual(true)


  });
});
