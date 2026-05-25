/**
 * Converts a number into its ordinal string form (e.g. 1 → "1st", 2 → "2nd").
 *
 * English ordinal rules:
 * - Numbers ending in 11, 12, or 13 always use "th" (they are exceptions).
 * - Numbers ending in 1 (but not 11) use "st".
 * - Numbers ending in 2 (but not 12) use "nd".
 * - Numbers ending in 3 (but not 13) use "rd".
 * - Everything else uses "th".
 *
 * @param {number} num - A positive whole number (e.g. 1, 22, 113).
 * @returns {string} The number with its ordinal suffix appended (e.g. "1st", "22nd").
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 * @see https://www.freecodecamp.org/news/javascript-modulo-operator/
 */
function getOrdinalNumber(num) {
  // % is the "remainder" operator (also called modulo).
  // num % 100 gives the last two digits of any number.
  // e.g. 113 % 100 = 13, so we catch the 11/12/13 exceptions correctly.
  const lastTwoDigits = num % 100;

  // num % 10 gives the last single digit of any number.
  // e.g. 21 % 10 = 1, so we know it ends in 1 → "st".
  const lastDigit = num % 10;

  // Check the 11/12/13 exceptions FIRST.
  // If we checked lastDigit first, 11 would wrongly get "st" instead of "th".
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return num + "th";
  }

  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";

  // All remaining numbers (4–9, 0, and any not caught above) use "th".
  return num + "th";
}

module.exports = getOrdinalNumber;