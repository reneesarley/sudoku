export class Game {
  constructor() {
    this.usersSolution= [];
    this.arrayToCheck = []
  }

  solution() {
    if (this.usersSolution.includes(NaN))
    {
      return alert('missed something!');
    }
    else if (this.getAllRows() && this.getAllColumns() && this.getAllBoxes())
    {
      return alert("darn, you're smart");
    }
  };


  arrayCheck() {
    for (var r = 1; r < 9 ; r++){
      if (!(this.arrayToCheck.includes(r)))
      {
        return false;
      }
    }
    return true;
  };


    getAllRows() {
    for (var i = 0; i <= this.usersSolution.length - 9; i+=9){
      this.arrayToCheck = [];
      this.arrayToCheck.push(this.usersSolution[i]);
      this.arrayToCheck.push(this.usersSolution[i+1]);
      this.arrayToCheck.push(this.usersSolution[i+2]);
      this.arrayToCheck.push(this.usersSolution[i+3]);
      this.arrayToCheck.push(this.usersSolution[i+4]);
      this.arrayToCheck.push(this.usersSolution[i+5]);
      this.arrayToCheck.push(this.usersSolution[i+6]);
      this.arrayToCheck.push(this.usersSolution[i+7]);
      this.arrayToCheck.push(this.usersSolution[i+8]);
      if (this.arrayCheck() == false){
        return false;
      }
    }
    return true;

  };

  getAllColumns() {
  for (var i = 0; i < 9; i++){
    this.arrayToCheck = [];
    this.arrayToCheck.push(this.usersSolution[i]);
    this.arrayToCheck.push(this.usersSolution[i+9]);
    this.arrayToCheck.push(this.usersSolution[i+18]);
    this.arrayToCheck.push(this.usersSolution[i+27]);
    this.arrayToCheck.push(this.usersSolution[i+36]);
    this.arrayToCheck.push(this.usersSolution[i+45]);
    this.arrayToCheck.push(this.usersSolution[i+54]);
    this.arrayToCheck.push(this.usersSolution[i+63]);
    this.arrayToCheck.push(this.usersSolution[i+72]);
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


};
export function makeGame() {
  while (true){
    var array = []
    for (var i = 0; i <= 80 ; i++ ){
        array.push(Math.floor((Math.random() * 9) + 1));
        console.log(array);
    }
      var newGame = new Game(array);
      if (newGame.solution()){
      return array
      }
    }
  }

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
