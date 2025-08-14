function getOrdinalNumber(num) {
  num = parseInt(num);

  let lastTwoNumber = num % 100;

  if (lastTwoNumber === 11 || lastTwoNumber === 12 || lastTwoNumber === 13) {
    return num + "th";
  }
  let lastDigit = num % 10;
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
