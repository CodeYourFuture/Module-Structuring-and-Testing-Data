/**
 * Repeats a string a given number of times.
 * This re-implements String.prototype.repeat without using it.
 *
 * @param {string} str - The string to repeat.
 * @param {number} count - How many times to repeat it. Must be 0 or greater.
 * @returns {string} The string repeated count times, or "" if count is 0.
 * @throws {Error} If count is negative.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("count must be 0 or greater");
  }

  let result = "";

  for (let i = 1; i < count; i++) {
    result = result + str;
  }

  return result;
}

module.exports = repeatStr;
