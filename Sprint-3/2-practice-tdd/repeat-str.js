/**
 * Origina file
 *
function repeatStr() {
  return "hellohellohello";
}

module.exports = repeatStr;
*
* End of file
*/

/**
 * @param {string} str - The string to repeat
 * @param {number} count - The number of times to repeat the string (must be non-negative)
 * @returns {string} The repeated string
 * @throws {Error} When count is negative
 */
function repeatStr(str, count) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('First argument must be a string');
  }

  if (typeof count !== 'number' || !Number.isInteger(count)) {
    throw new Error('Count must be an integer');
  }

  // Handle negative count
  if (count < 0) {
    throw new Error('Count must be a positive integer');
  }

  // Handle count of 0
  if (count === 0) {
    return "";
  }

  // Use built-in repeat method for efficiency
  return str.repeat(count);
}

module.exports = repeatStr;

