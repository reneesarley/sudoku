export function Checker(row, column, box) {
  this.row = row;
  this.column = column;
  this.box = box;
}


Checker.prototype.rowCheck = function () {
  for (var r = 1; r < 9 ; r++){
    if (!(this.row.includes(r)))
    {
      return false
    }
  }
  return true
};

// Checker.prototype.colCheck = function () {
//   for (r = 0; r < 9 ; r++)
//
// };
