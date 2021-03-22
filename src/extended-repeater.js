const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  str = String(str);
  addition = String(addition);

  let additionString = strRepeat(addition, additionSeparator, additionRepeatTimes);
  return  strRepeat(str + additionString, separator, repeatTimes);  
};

function strRepeat (string, sep, arr) {
  return new Array(arr).fill(string).join(sep);
}