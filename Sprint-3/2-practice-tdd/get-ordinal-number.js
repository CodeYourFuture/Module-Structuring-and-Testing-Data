function getOrdinalNumber(num) {
  // Handle special cases for teens (11th, 12th, 13th)
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  
  // Handle based on last digit
  const lastDigit = num % 10;
  
  if (lastDigit === 1) {
    return num + "st";
  } else if (lastDigit === 2) {
    return num + "nd";
  } else if (lastDigit === 3) {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
