export class Game {
  constructor() {
    this.usersSolution= [];
    this.arrayToCheck = [];
    this.gameBoard = [];
  }

  solution(solutionToCheck) {
    if (this.usersSolution.includes(NaN))
    {
      return alert('missed something!');
    }
    else if (this.getAllRows(solutionToCheck) && this.checkAllColumns(solutionToCheck) && this.getAllBoxes(solutionToCheck))
    {
      return alert("darn, you're smart");
    }
  };

  arrayCheck() {
    if(this.arrayToCheck.length == 9){
      for (var r = 1; r < 10 ; r++){
        if (!(this.arrayToCheck.includes(r)))
        {
          return false;
        }
      }
    }
    else {
      for (var n = 1; n < 10 ; n++){
        let numberOfTimesNumberAppearsInArray = this.arrayToCheck.filter(number => number == n).length
        if (numberOfTimesNumberAppearsInArray > 1)
        {
          return false;
        }
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
        this.arrayToCheck.push(solutionToCheck[n]);
      }
      if (this.arrayCheck() == false){
        return false;
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
          console.log(`the current starting index being used is ${i}`);
          if(!(solutionToCheck[i+currentIndex] == null))
          this.arrayToCheck.push(solutionToCheck[i+currentIndex]);
        }
        console.log(`current array to check is ${this.arrayToCheck}`);
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
    while (counter < 81){
      this.arrayToCheck =[];
      let options =[1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (let i = 0; i <= 8 ; i++ ){
        let randomIndex = (Math.floor((Math.random() * options.length -1) + 1));
        this.arrayToCheck.push(options[randomIndex]);
        options.splice(randomIndex, 1);
      }
      console.log(`this is the array that will be checked ${this.arrayToCheck}`);
      for (let i = 0; i < this.arrayToCheck.length; i++ )
      {
        this.gameBoard.push(this.arrayToCheck[i]);
      }
      console.log(`Gameboard BEFORE backtracing: ${this.gameBoard}`)
      let updatedGameBoardFailsColumnCheck = this.checkAllColumns(this.gameBoard)
      console.log(`column ${this.arrayToCheck} was ${updatedGameBoardFailsColumnCheck}`);
      //backtrack last added array if gameboard isn't winnings
      if(!(updatedGameBoardFailsColumnCheck))
      {
        console.log(`this is the length of the gameboard before backtracking ${this.gameBoard.length}`);
        this.gameBoard.splice((this.gameBoard.length-9), 9);
        // console.log(`this is the length of the gameboard AFTER backtracking ${this.gameBoard.length}`);
        // console.log(`Gameboard after backtracing: ${this.gameBoard}`)

      } else {
        counter = this.gameBoard.length
      }
    }
    // console.log(`this is the gameboard that was created ${this.gameBoard}`);
  }
};
