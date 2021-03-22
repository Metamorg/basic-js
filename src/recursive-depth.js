const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let resultDepth = 1;
    arr.forEach(e => {
      if(Array.isArray(e)){ 
        resultDepth = Math.max(this.calculateDepth(e) + 1, resultDepth)
      };
    });
    return resultDepth
  }
}
