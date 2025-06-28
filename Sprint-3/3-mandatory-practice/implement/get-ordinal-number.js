function getOrdinalNumber(num) { // Function to convert a number to its ordinal representation
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("Input must be a number"); // Validate input: must be a positive integer
  } 

  const lastDigit = num % 10; // Get the last digit of the number
  const lastTwoDigits = num % 100; // Get the last two digits of the number

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + `th`; // Special case for 11, 12, and 13
  }

  const suffix = 
    lastDigit === 0 ? 'th' : // 0 always gets 'th'
    lastDigit === 1 ? 'st' :
    lastDigit === 2 ? 'nd' :
    lastDigit === 3 ? 'rd' :
    'th'; // Determine the appropriate suffix based on the last digit
  return num + suffix; // Return the number concatenated with its ordinal suffix
}

// Given a number num,

// console.log(getOrdinalNumber(1)); // "1st"
// console.log(getOrdinalNumber(2)); // "2nd"
// console.log(getOrdinalNumber(3)); // "3rd"
// console.log(getOrdinalNumber(4)); // "4th"
// console.log(getOrdinalNumber(11)); // "11th"
// console.log(getOrdinalNumber(12)); // "12th"
// console.log(getOrdinalNumber(13)); // "13th"
// console.log(getOrdinalNumber(21)); // "21st"
// console.log(getOrdinalNumber(112)); // "22nd"
// console.log(getOrdinalNumber(113)); // "23rd"

module.exports = getOrdinalNumber;
