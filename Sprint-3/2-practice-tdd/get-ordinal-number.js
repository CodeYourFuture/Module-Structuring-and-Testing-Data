function getOrdinalNumber(num) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return num + "st";  
  }
}

module.exports = getOrdinalNumber;
