function getOrdinalNumber(num) {
  const lastTwo = num % 100;
  const lastOne = num % 10;

  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return num + "th";
  }

  if (lastOne === 1) {
    return num + "st";
  }

  if (lastOne === 2) {
    return num + "nd";
  }

  if (lastOne === 3) {
    return num + "rd";
  }

  return num + "th";
}

module.exports = getOrdinalNumber;
