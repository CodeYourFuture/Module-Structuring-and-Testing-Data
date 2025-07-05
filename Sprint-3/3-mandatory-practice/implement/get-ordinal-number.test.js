const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

function getOrdinalNumber(num) {
  // Handle invalid inputs gracefully (optional)
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return "Invalid input";
  }

  // Handle the special case for teens (11, 12, 13)
  const teenRemainder = num % 100;
  if (teenRemainder >= 11 && teenRemainder <= 13) {
    return num + "th";
  }

  // Get the last digit to determine suffix
  const lastDigit = num % 10;

  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;

