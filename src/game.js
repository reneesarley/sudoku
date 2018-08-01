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
    for (var i = 0; i < 62; i+=3){
      if (i == 0 || i == 3 || i == 6 || i == 27 || i == 30 || i == 33 || i == 54 || i == 57 || i == 60){
        this.arrayToCheck = [];
        this.arrayToCheck.push(solutionToCheck[i]);
        this.arrayToCheck.push(solutionToCheck[i+1]);
        this.arrayToCheck.push(solutionToCheck[i+2]);
        this.arrayToCheck.push(solutionToCheck[i+9]);
        this.arrayToCheck.push(solutionToCheck[i+10]);
        this.arrayToCheck.push(solutionToCheck[i+11]);
        this.arrayToCheck.push(solutionToCheck[i+18]);
        this.arrayToCheck.push(solutionToCheck[i+19]);
        this.arrayToCheck.push(solutionToCheck[i+20]);
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
        console.log(`this is the length of the gameboard AFTER backtracking ${this.gameBoard.length}`);
        console.log(`Gameboard after backtracing: ${this.gameBoard}`)

      } else {
        counter = this.gameBoard.length
      }
    }
    console.log(`this is the gameboard that was created ${this.gameBoard}`);
  }
};
// export function makeGame() {
//   while (true){
//     var array = []
//     for (var i = 0; i <= 80 ; i++ ){
//         array.push(Math.floor((Math.random() * 9) + 1));
//         console.log(array);
//     }
//       var newGame = new Game(array);
//       if (newGame.solution()){
//       return array
//       }
//     }
//   }

  // export function makeGameTwo() {
  //   while (true){
  //     var array = []
  //     for (var i = 0; i <= 8 ; i++ ){
  //       var rowArray = []
  //       var newNumber =(Math.floor((Math.random() * 9) + 1))
  //       if(!(rowArray.inclueds(newNumber)))
  //       {
  //         rowArray.push(newNumber);
  //       }
  //         console.log(rowArray);
  //     }
  //       var newGame = new Game(array);
  //       if (newGame.solution()){
  //       return array
  //       }
  //     }
  //   }
  //

// 7,1,5,6,8,2,4,3,9,
// 9,2,6,3,5,8,7,4,1,
// 1,2,4,3,5,8,6,7,9,
// 6,1,3,9,5,7,2,4,8,
// 2,8,4,7,5,9,3,6,1,
// 5,9,2,4,7,6,8,1,3,
// 8,9,6,4,2,3,7,5,1,
// 3,6,2,8,4,9,7,5,1,
// 4,9,3,6,5,1,2,8,7
