export class Game {
  constructor() {
    this.usersSolution= [];
    this.arrayToCheck = [];
    this.gameBoard = [];
  }

  solution(solutionToCheck) {
    if (this.usersSolution.includes(NaN))
    {
      return false;
    }
    else if (this.getAllRows(solutionToCheck) && this.checkAllColumns(solutionToCheck) && this.getAllBoxes(solutionToCheck))
    {
      return true;
    }
  };

  arrayCheck() {
    for (var n = 1; n < 10 ; n++){
      let numberOfTimesNumberAppearsInArray = this.arrayToCheck.filter(number => number == n).length
      if (numberOfTimesNumberAppearsInArray > 1)
      {
        return false;
      }
    }
  return true;
  };


    getAllRows(solutionToCheck) {
    for (var i = 0; i <= solutionToCheck.length - 9; i+=9){
      this.arrayToCheck = [];
      this.arrayToCheck.push(solutionToCheck[i]);
      this.arrayToCheck.push(solutionToCheck[i+1]);
      this.arrayToCheck.push(solutionToCheck[i+2]);
      this.arrayToCheck.push(solutionToCheck[i+3]);
      this.arrayToCheck.push(solutionToCheck[i+4]);
      this.arrayToCheck.push(solutionToCheck[i+5]);
      this.arrayToCheck.push(solutionToCheck[i+6]);
      this.arrayToCheck.push(solutionToCheck[i+7]);
      this.arrayToCheck.push(solutionToCheck[i+8]);
      if (this.arrayCheck() == false){
        console.log(`the ${i} row failed with these numbers ${this.arrayToCheck}`);
        return false;
      }
    }
    return true;

  };

  checkAllColumns(solutionToCheck) {
    for (let i = 0; i < 9; i++){
      this.arrayToCheck = [];
      for (let n = 0; n <= solutionToCheck.length - 9; n+=9)
      {
        if(!(this.arrayToCheck.indexOf(solutionToCheck[n + i])=== -1)){
          return false;
        }
          this.arrayToCheck.push(solutionToCheck[n + i]);
      }
    }
    return true;
  };

  getAllBoxes(solutionToCheck) {
    let indexesInBox = [0, 1, 2, 9, 10, 11, 18, 19, 20]
    let boxStartingIndexes = [0, 3, 6, 27, 30, 33, 54, 57, 60]
    for (var i = 0; i <= solutionToCheck.length; i+=3){
      if (boxStartingIndexes.includes(i)){
        this.arrayToCheck = [];
        for (let j = 0; j <= indexesInBox.length; j++)
        {
          let currentIndex = indexesInBox[j]
          if(!(this.arrayToCheck.indexOf(solutionToCheck[i+currentIndex])===-1))
          {
            return false
          }
          else if(!(solutionToCheck[i+currentIndex] == null) )
          this.arrayToCheck.push(solutionToCheck[i+currentIndex]);
        }
        if (this.arrayCheck() == false){
          return false;
        }
      }
    }
    return true;
  }

  makeGameBoard() {
    let counter = 0;
    this.gameBoard = [];
    while (counter < 9){
      this.arrayToCheck =[];
      let options =[1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (let i = 0; i <= 8 ; i++ ){
        let randomIndex = (Math.floor((Math.random() * options.length -1) + 1));
        this.arrayToCheck.push(options[randomIndex]);
        options.splice(randomIndex, 1);
      }
      for (let i = 0; i < this.arrayToCheck.length; i++ )
      {
        this.gameBoard.push(this.arrayToCheck[i]);
        console.log(`add potential row`);
      }
      if(!(this.checkAllColumns(this.gameBoard)))
      {
        this.gameBoard.splice((this.gameBoard.length-9), 9);
      }

      // } else if(!(this.getAllBoxes(this.gameBoard))){
      //
      //   this.gameBoard.splice((this.gameBoard.length-9), 9);
      // }
      else {
        counter += 1
      }
    }
      console.log(`this is the final gamenoard: ${this.gameBoard}`);
  }
};

// this was the result at 9:26- this ran really quickly, first attempt after building
// 2,1,3,9,8,4,7,6,5,
// 4,6,8,7,5,3,1,9,2,
// 9,5,7,2,6,1,3,8,4,
// 6,7,5,4,1,8,2,3,9,
// 1,3,2,5,9,6,7,8,4,
// 8,4,9,3,2,7,1,6,5,
// 5,2,1,7,9,4,6,3,8,
// 7,8,9,3,6,2,1,4,5,
// 3,6,4,5,1,8,2,7,9

//attempt at 9:28 - ran and showed console log

// atempt at 9:30 - didn't even show console log

// attempt 9:32




// 8,2,5,3,7,4,1,9,6,
// 6,4,9,1,8,2,5,7,3,
// 1,3,7,6,9,5,4,2,8,
// 5,4,9,2,6,8,3,7,1,2,7,8,3,4,1,6,5,9,3,1,6,5,7,9,8,2,4,4,6,1,5,9,3,8,7,2,9,3,8,2,1,7,4,5,6,7,2,5,8,6,4,1,3,9
