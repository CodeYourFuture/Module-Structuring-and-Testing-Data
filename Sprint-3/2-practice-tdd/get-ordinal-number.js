function getOrdinalNumber(num) {
  // Check if input is a number
  if (!Number.isInteger(num) || !Number.isFinite(num) || num <= 0) {
    throw new Error("Input must be a valid number");
  }

  const lastNum = num % 10; // checks what last number is
  const last2Num = num % 100; // checks what last two numbers are, needed to check for 11

  if (last2Num >= 11 && last2Num <= 13) {
    return num + "th";
  }
  if (lastNum === 1) return num + "st";
  if (lastNum === 2) return num + "nd";
  if (lastNum === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;
