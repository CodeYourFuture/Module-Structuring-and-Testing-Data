function getOrdinalNumber(num) {
  // I used the modulus to find and last digit and last two digits in the given number
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + 'th';
  }
  else if (num % 10 === 1) {
    return num + 'st';
  }
  else if (num % 10 === 2) {
    return num + 'nd';
  }
  else if (num % 10 === 3) {
    return num + 'rd';
  }
  else {
    return num + 'th';
  }
}

module.exports = getOrdinalNumber;