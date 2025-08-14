function getOrdinalNumber(num) {
 
  let suffix;

  // Handle the special cases: 11, 12, 13
  if (num === 11 || num === 12 || num === 13) {
    suffix = "th";
  } else {
    // Get the last digit of the number
    let lastDigit = num % 10;

    // Decide the suffix based on last digit
    if (lastDigit === 1) {
      suffix = "st";
    } else if (lastDigit === 2) {
      suffix = "nd";
    } else if (lastDigit === 3) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
  }

  return num + suffix;
}

module.exports = getOrdinalNumber;