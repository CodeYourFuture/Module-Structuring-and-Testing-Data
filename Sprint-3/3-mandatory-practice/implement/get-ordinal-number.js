function getOrdinalNumber(num) {
  const lastTwo = num % 100;
  const lastDigit = num % 10;
  if (lastTwo >= 11 && lastTwo <= 13) {
    // for 11 , 12, 13
    return num + "th";
  }

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
console.log(getOrdinalNumber(2));
