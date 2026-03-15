function getOrdinalNumber(num) {
  // Check if input is a number
  if (!Number.isInteger(num) || !Number.isFinite(num) || num <= 0) {
    throw new Error("Input must be a valid number");
  }

  const lastnum = num % 10; // checks what last number is
  const last2num = num % 100; // checks what last two numbers are, needed to check for 11

  if (last2num === 11 || last2num === 12 || last2num === 13) {
    return num + "th";
  }
  if (lastnum === 1) return num + "st";
  if (lastnum === 2) return num + "nd";
  if (lastnum === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
