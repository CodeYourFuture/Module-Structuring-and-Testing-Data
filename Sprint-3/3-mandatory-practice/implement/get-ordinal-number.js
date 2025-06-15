function getOrdinalNumber(num) {
  const lastTwo = num % 100;
  const lastDigit = num % 10;
  if (lastDigit === 1 && lastTwo !== 11) {
    return num + "st";
  }
  return num + "th";
}

module.exports = getOrdinalNumber;