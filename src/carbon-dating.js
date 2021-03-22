const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!Number(sampleActivity) || typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  } else {
      return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  }

};
