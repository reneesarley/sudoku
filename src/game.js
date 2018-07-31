export function Game(mainArray) {
  this.mainArray = mainArray;
  this.arrayToCheck = [];
}



Game.prototype.arrayCheck = function () {
  for (var r = 1; r < 9 ; r++){
    if (!(this.arrayToCheck.includes(r)))
    {
      return false
    }
  }
  return true
};


Game.prototype.getAllRows = function () {

  for (var i = 0; i < 72; i+=9){
       this.arrayToCheck = [];
       this.arrayToCheck.push(this.mainArray[i])
       this.arrayToCheck.push(this.mainArray[i+1])
       this.arrayToCheck.push(this.mainArray[i+2])
       this.arrayToCheck.push(this.mainArray[i+3])
       this.arrayToCheck.push(this.mainArray[i+4])
       this.arrayToCheck.push(this.mainArray[i+5])
       this.arrayToCheck.push(this.mainArray[i+6])
       this.arrayToCheck.push(this.mainArray[i+7])
       this.arrayToCheck.push(this.mainArray[i+8])

       if (this.arrayCheck() == false){
         return false;
       }
}
return true;

};
