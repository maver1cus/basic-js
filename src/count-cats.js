const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let countCats = 0;
  
  matrix.forEach(col => col.forEach( el => {
    el === '^^'
      ? countCats = countCats + 1
      : true
  } ));


  return countCats;
};
