function getOrdinalNumber(num) {
  if (typeof num !== "number") {
    return undefined; // Return undefined if the input is not a number
  }
  let result;
  if (num === 1) {
    return "1st";
  } else if (num === 2) {
    return "2nd";
  } else if (num === 3) {
    return "3rd";
  } else if (num >= 4 && num <= 20) {
    return num + "th";
  } else if (num % 10 === 1) {
    // % gives the last digit of the number
    return num + "st";
  } else if (num % 10 === 2) {
    return num + "nd";
  } else if (num % 10 === 3) {
    return num + "rd";
  }
  const s = ["th", "st", "nd", "rd"];
  const v = num % 100; // Get the last two digits of the number
  result = num + (s[(v - 20) % 10] || s[v] || s[0]); // Determine the correct suffix based on the last two digits
  return result;
}

module.exports = getOrdinalNumber;
