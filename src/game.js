export function Game(mainArray) {
  this.mainArray = mainArray;
  this.arrayToCheck = [];
}



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
