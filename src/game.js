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
    else if (this.getAllRows(solutionToCheck) && this.getAllColumns(solutionToCheck) && this.getAllBoxes())
    {
      return alert("darn, you're smart");
    }
  };

  arrayCheck() {
    for (var r = 1; r < 10 ; r++){
      if (!(this.arrayToCheck.includes(r)))
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
        return false;
      }
    }
    return true;

  };

  getAllColumns(solutionToCheck) {
  for (var i = 0; i < (solutionToCheck.length/9); i++){
    this.arrayToCheck = [];
    this.arrayToCheck.push(solutionToCheck[i]);
    this.arrayToCheck.push(solutionToCheck[i+9]);
    this.arrayToCheck.push(solutionToCheck[i+18]);
    this.arrayToCheck.push(solutionToCheck[i+27]);
    this.arrayToCheck.push(solutionToCheck[i+36]);
    this.arrayToCheck.push(solutionToCheck[i+45]);
    this.arrayToCheck.push(solutionToCheck[i+54]);
    this.arrayToCheck.push(solutionToCheck[i+63]);
    this.arrayToCheck.push(solutionToCheck[i+72]);
    if (this.arrayCheck() == false){
      return false;
    }
  }
  return true;
};

  getAllBoxes() {
    for (var i = 0; i < 62; i+=3){
      if (i == 0 || i == 3 || i == 6 || i == 27 || i == 30 || i == 33 || i == 54 || i == 57 || i == 60){
        this.arrayToCheck = [];
        this.arrayToCheck.push(this.usersSolution[i]);
        this.arrayToCheck.push(this.usersSolution[i+1]);
        this.arrayToCheck.push(this.usersSolution[i+2]);
        this.arrayToCheck.push(this.usersSolution[i+9]);
        this.arrayToCheck.push(this.usersSolution[i+10]);
        this.arrayToCheck.push(this.usersSolution[i+11]);
        this.arrayToCheck.push(this.usersSolution[i+18]);
        this.arrayToCheck.push(this.usersSolution[i+19]);
        this.arrayToCheck.push(this.usersSolution[i+20]);
        if (this.arrayCheck() == false){
          return false;
        }
      }
    }
    return true;
  }

  makeGameBoard() {
    while (this.gameBoard.length < 81){
      this.arrayToCheck =[];
      for (let i = 0; i <= 8 ; i++ ){
          this.arrayToCheck.push(Math.floor((Math.random() * 9) + 1));
      }
      let arrayContainsAllNumbers = this.arrayCheck();
      if (arrayContainsAllNumbers){
        for (let i = 0; i < this.arrayToCheck.length; i++ )
        {
          this.gameBoard.push(this.arrayToCheck[i]);
        }
      }
    }
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
