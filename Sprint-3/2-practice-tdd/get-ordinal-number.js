function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) return `${num}st`;
  return `${num}th`;
}
    

module.exports = getOrdinalNumber;
