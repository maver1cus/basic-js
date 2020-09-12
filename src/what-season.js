const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) { return 'Unable to determine the time of year!'; }

    try {
      date.getTime();
    } catch(e) {
      throw new Error(e);
    }

    let m = date.getMonth() + 1;
    let season = ""
    if ( (m >= 1 && m <= 2) || m == 12 ) season = 'winter';
    if ( m >= 3 && m <= 5 ) season = 'spring';
    if ( m >= 6 && m <= 8 ) season = 'summer';
    if ( m >= 9 && m <= 11 ) season = 'autumn';

    return season;
};
