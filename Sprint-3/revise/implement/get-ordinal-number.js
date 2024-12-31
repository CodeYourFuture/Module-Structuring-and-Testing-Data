// get-ordinal-number.js
function getOrdinalNumber(num) {
  // Check if the input is a number and an integer
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new Error("Input must be an integer."); // Throw an error if input is not an integer
  }

  // Array of suffixes for ordinal numbers
  const suffixes = ["th", "st", "nd", "rd"];
  
  // Get the last two digits of the number
  const v = num % 100;

  // Special case handling for 11th, 12th, and 13th
  if (v >= 11 && v <= 13) {
    return num + "th"; // Always use "th" for these cases
  }

  // Use the suffix based on the last digit
  return num + (suffixes[num % 10] || "th"); // Default to "th" if no specific suffix is found
}

module.exports = getOrdinalNumber; // Export the function

