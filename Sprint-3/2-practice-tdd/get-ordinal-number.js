function getOrdinalNumber(num) {
  let lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }
  let lastDigit = num % 10;
  // umbers ending with 1
  if (lastDigit === 1) {
    return num + "st";
  }
  // numbers ending with 2
  if (lastDigit === 2) {
    return num + 'nd';
  }
  // numbers ending with 3
  if (lastDigit === 3) {
    return num + 'rd';
  } 
  //any other number 
  return num + 'th';
}

module.exports = getOrdinalNumber;
