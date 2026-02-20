function getOrdinalNumber(num) {
  let last2digit = num % 100
  let lastDigit = num % 10
  if (last2digit === 11 || last2digit === 12 || last2digit === 13) { 
    return `${num}th`
  }
  else if (lastDigit === 1) {
    return `${num}st`
  }
  else if (lastDigit === 2) {
    return `${num}nd`
  }
  else if (lastDigit === 3) {
    return `${num}rd`
  }
  else return `${num}th`
}

module.exports = getOrdinalNumber;
