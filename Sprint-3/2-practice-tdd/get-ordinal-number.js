function getOrdinalNumber(num) {
   const lastDigit = num % 10;
  if (lastDigit === 1) 
    return `${num}st`;
}

module.exports = getOrdinalNumber;
