const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(c)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (error) {
    throw new TypeError('Invalid date!');
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new TypeError('Invalid date!');
  }

  const month = date.getMonth();

  if (isNaN(month)) {
    throw new TypeError('Invalid date!');
  }

  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  } else if (month === 8 || month === 9 || month === 10) {
    return 'fall';
  }
}


module.exports = {
  getSeason
};
