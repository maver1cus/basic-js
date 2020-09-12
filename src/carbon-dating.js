const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" ||
    /[A-Za-z]/.test(sampleActivity) ||
    sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)
    return false;

  let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate;
  return Math.ceil(years);
};
