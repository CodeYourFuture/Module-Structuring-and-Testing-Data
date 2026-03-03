/**
 * Original file
 *
function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;
*
* Enf of file
*/

function getOrdinalNumber(number) {
  if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
    throw new Error('Input must be a non-negative integer');
  }

  // Special case for numbers ending in 11, 12, 13
  const lastTwoDigits = number % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + "th";
  }

  // Check the last digit
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
    default:
      return number + "th";
  }
}

module.exports = getOrdinalNumber;

