const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, set = []) {
    set.push(depth);
    arr.forEach( e =>  {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depth + 1, set);
      }
    });
    return Math.max.apply(null, set);
  }
};