export function Game(mainArray) {
  this.mainArray = mainArray;
  this.arrayToCheck = [];
}

Game.prototype.solution = function() {
  if (this.mainArray.includes(NaN))
  {
    return alert('missed something!');
  }
  else if (this.getAllRows() && this.getAllColumns() && this.getAllColumns())
  {
    return alert("darn, you're smart");
  }
};


Game.prototype.arrayCheck = function () {
  for (var r = 1; r < 9 ; r++){
    if (!(this.arrayToCheck.includes(r)))
    {
      return false;
    }
  }
  return true;
};


Game.prototype.getAllRows = function () {
  for (var i = 0; i <= 72; i+=9){
    this.arrayToCheck = [];
    this.arrayToCheck.push(this.mainArray[i]);
    this.arrayToCheck.push(this.mainArray[i+1]);
    this.arrayToCheck.push(this.mainArray[i+2]);
    this.arrayToCheck.push(this.mainArray[i+3]);
    this.arrayToCheck.push(this.mainArray[i+4]);
    this.arrayToCheck.push(this.mainArray[i+5]);
    this.arrayToCheck.push(this.mainArray[i+6]);
    this.arrayToCheck.push(this.mainArray[i+7]);
    this.arrayToCheck.push(this.mainArray[i+8]);
    if (this.arrayCheck() == false){
      return false;
    }
  }
  return true;

};

Game.prototype.getAllColumns = function () {
  for (var i = 0; i < 9; i++){
    this.arrayToCheck = [];
    this.arrayToCheck.push(this.mainArray[i]);
    this.arrayToCheck.push(this.mainArray[i+9]);
    this.arrayToCheck.push(this.mainArray[i+18]);
    this.arrayToCheck.push(this.mainArray[i+27]);
    this.arrayToCheck.push(this.mainArray[i+36]);
    this.arrayToCheck.push(this.mainArray[i+45]);
    this.arrayToCheck.push(this.mainArray[i+54]);
    this.arrayToCheck.push(this.mainArray[i+63]);
    this.arrayToCheck.push(this.mainArray[i+72]);
    if (this.arrayCheck() == false){
      return false;
    }
  }
  return true;
};

Game.prototype.getAllBoxes= function () {
  for (var i = 0; i < 62; i+=3){
    if (i == 0 || i == 3 || i == 6 || i == 27 || i == 30 || i == 33 || i == 54 || i == 57 || i == 60){
      this.arrayToCheck = [];
      this.arrayToCheck.push(this.mainArray[i]);
      this.arrayToCheck.push(this.mainArray[i+1]);
      this.arrayToCheck.push(this.mainArray[i+2]);
      this.arrayToCheck.push(this.mainArray[i+9]);
      this.arrayToCheck.push(this.mainArray[i+10]);
      this.arrayToCheck.push(this.mainArray[i+11]);
      this.arrayToCheck.push(this.mainArray[i+18]);
      this.arrayToCheck.push(this.mainArray[i+19]);
      this.arrayToCheck.push(this.mainArray[i+20]);
      if (this.arrayCheck() == false){
        return false;
      }
    }
  }
  return true;
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
  //       var newNumber =(Math.floor((Math.random() * 9) + 1));
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
