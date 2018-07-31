import { Checker} from '../src/checker';

describe ('Checker', function() {
  var newArray;
  var failArray;

  beforeEach(function() {

    failArray = new Checker(
      [1, 2, 8, 4, 5, 6, 7, 8, 9]);

    newArray = new Checker(
      [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


  it ('should test row contains correct numbers', function() {
    var rowResult = newArray.rowCheck();
    console.log(rowResult);
    expect(rowResult).toEqual(true);

  });
});
