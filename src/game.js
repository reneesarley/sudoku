export class Game {
  constructor() {
    this.usersSolution= [];
    this.arrayToCheck = [];
    this.gameBoard = [];
    this.boxToCheck = [];
    this.potentialRow = [];
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
          console.log(`this is the failing column ${this.arrayToCheck}`);
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
      //if this is a index that starts a box
      if (boxStartingIndexes.includes(i)){
        this.boxToCheck = [];
        for (let j = 0; j <= indexesInBox.length; j++)
        {
          let currentIndex = indexesInBox[j]
          if(!(this.boxToCheck.indexOf(solutionToCheck[i+currentIndex])===-1))
          {
            console.log(`this is the box that failed ${this.boxToCheck} and the failing number is ${solutionToCheck[i+currentIndex]}`);
            return false;ß
          }
          else if(!(solutionToCheck[i+currentIndex] == null) )
          this.boxToCheck.push(solutionToCheck[i+currentIndex]);
        }
      }
    }
    return true;
  }

  makeGameBoard() {
    let counter = 0;
    this.gameBoard = [];
    while (counter < 9){
      this.potentialRow =[];
      let options =[1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (let i = 0; i <= 8 ; i++ ){
        let randomIndex = (Math.floor((Math.random() * options.length -1) + 1));
        this.potentialRow.push(options[randomIndex]);
        options.splice(randomIndex, 1);
      }
      for (let i = 0; i < this.potentialRow.length; i++ )
      {
        this.gameBoard.push(this.potentialRow[i]);
      }
      console.log(`add potential row`);
      // console.log(`counter is at: ${counter} and the potentialRow is ${this.potentialRow}`)

      if(!(this.getAllBoxes(this.gameBoard)))
      {
        this.gameBoard.splice((this.gameBoard.length-9), 9);

      } else if(!(this.checkAllColumns(this.gameBoard))){
        this.boxToCheck

        this.gameBoard.splice((this.gameBoard.length-9), 9);
      }
       else {
        counter += 1
      }
    }
      console.log(`this is the final gameboard: ${this.gameBoard}`);
  }
};



// 2,4,8,1,9,3,7,5,6,
// 1,5,3,2,6,7,9,4,8,
// 6,9,7,4,8,5,1,2,3,
// 8,6,2,7,3,9,4,1,5,
// 4,7,9,8,5,1,3,6,2,
// 5,3,1,6,4,2,8,9,7,
// 3,2,4,5,1,8,6,7,9,
// 9,1,5,3,7,6,2,8,4,
// 7,8,6,9,2,4,5,3,1

// 7,1,5,2,9,4,8,6,3,
// 9,2,6,1,8,3,5,4,7,
// 4,8,3,5,6,7,9,2,1,
// 1,7,4,9,2,5,3,8,6,
// 2,3,8,6,4,1,7,9,5,
// 5,6,9,7,3,8,4,1,2,
// 6,9,7,8,5,2,1,3,4,
// 3,5,2,4,1,9,6,7,8,
// 8,4,1,3,7,6,2,5,9

// 1,2,5,8,6,7,3,4,9,
// 3,8,4,2,9,1,5,7,6,
// 9,7,6,5,3,4,1,8,2,
// 7,9,8,3,5,6,4,2,1,
// 6,4,2,1,7,8,9,5,3,
// 5,3,1,4,2,9,8,6,7,
// 8,5,7,6,1,3,2,9,4,
// 2,6,3,9,4,5,7,1,8,
// 4,1,9,7,8,2,6,3,5

// 7,3,9,5,4,6,8,1,2,
// 1,2,5,9,3,8,6,4,7,
// 8,4,6,1,2,7,9,5,3,
// 3,9,2,6,1,4,5,7,8,
// 5,6,7,2,8,3,1,9,4,
// 4,8,1,7,5,9,3,2,6,
// 9,5,3,8,7,2,4,6,1,
// 6,7,8,4,9,1,2,3,5,
// 2,1,4,3,6,5,7,8,9

// 8,7,9,1,4,2,6,3,5,
// 1,4,5,8,3,6,7,2,9,
// 2,3,6,7,5,9,8,1,4,
// 3,6,2,4,1,8,9,5,7,
// 7,5,1,6,9,3,2,4,8,
// 9,8,4,5,2,7,1,6,3,
// 6,2,7,3,8,5,4,9,1,
// 4,9,3,2,7,1,5,8,6,
// 5,1,8,9,6,4,3,7,2

//7,6,9,8,2,4,3,5,1,
//3,4,2,1,5,6,7,8,9,
//5,1,8,7,9,3,2,6,4,
//9,3,6,2,7,8,4,1,5,
//2,5,4,6,1,9,8,3,7,
//1,8,7,3,4,5,9,2,6,
//4,2,5,9,8,1,6,7,3,
//8,9,3,5,6,7,1,4,2,
//6,7,1,4,3,2,5,9,8
