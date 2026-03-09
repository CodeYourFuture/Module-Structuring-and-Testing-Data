function getOrdinalNumber(num) {
  // Check if input is a number
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Input must be a valid number");
  }

  const j = num % 10; // checks what last number is
  const k = num % 100; // checks what last two numbers are, needed to check for 11

  if (k === 11 || k === 12 || k === 13) {
    return num + "th";
  }
  if (j === 1) return num + "st";
  if (j === 2) return num + "nd";
  if (j === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
