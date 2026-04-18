

/**
 * Repeats a string a given number of times.
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times to repeat the string.
 * @returns {string} - The repeated string.
 * @throws {Error} - If count is a negative integer.
 */
function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  // If count is 0, .repeat(0) naturally returns an empty string "".
  // If count is 1, .repeat(1) naturally returns the original string.
  return str.repeat(count);
}

module.exports = repeatStr;
