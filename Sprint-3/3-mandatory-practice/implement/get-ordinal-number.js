function getOrdinalNumber(num) { // Function to convert a number to its ordinal representation
  if (typeof num !== "number") { // Check if the input is a number
    throw new Error("Input must be a number"); // If not, throw an error
  }

  const suffixes = ["th", "st", "nd", "rd"]; // Array of suffixes for ordinal numbers
  const lastTwo = num % 100; // Get the last two digits of the number
  const lastDigit = num % 10; // Get the last digit of the number

  if (lastTwo >= 11 && lastTwo <= 13) { // Special case for numbers ending in 11, 12, or 13
    return num + "th"; // Return "th" for these numbers
  }

  switch (lastDigit) { // Use a switch statement to determine the correct suffix based on the last digit
    case 1: // If the last digit is 1, return "st"
      return num + "st";
    case 2: // If the last digit is 2, return "nd"
      return num + "nd";
    case 3: // If the last digit is 3, return "rd"
      return num + "rd";
    default: // For all other last digits, return "th"
      return num + "th";
  }
}

// Given a number num,

console.log(getOrdinalNumber(1)); // "1st"
console.log(getOrdinalNumber(2)); // "2nd"
console.log(getOrdinalNumber(3)); // "3rd"
console.log(getOrdinalNumber(4)); // "4th"
console.log(getOrdinalNumber(11)); // "11th"
console.log(getOrdinalNumber(12)); // "12th"
console.log(getOrdinalNumber(13)); // "13th"
console.log(getOrdinalNumber(21)); // "21st"
console.log(getOrdinalNumber(112)); // "22nd"
console.log(getOrdinalNumber(113)); // "23rd"

module.exports = getOrdinalNumber;
