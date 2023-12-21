const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  const str1 = s1.toLowerCase();
  const str2 = s2.toLowerCase();

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  let commonCount = 0;

  for (let char of str2) {
    if (count[char] > 0) {
      commonCount += 1;
      count[char] -= 1;
    }
  }

  return commonCount;

}


module.exports = {
  getCommonCharacterCount
};
