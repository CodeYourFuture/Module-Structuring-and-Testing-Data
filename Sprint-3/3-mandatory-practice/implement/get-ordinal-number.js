function getOrdinalNumber(num) { // Convert the number to a string to easily access its last digits
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
  
    // Handle special cases for numbers 11-13
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${num}th`;
    }
  
    // Handle normal cases for 1st, 2nd, 3rd, etc.
    switch (lastDigit) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
    }
  
 
}

module.exports = getOrdinalNumber;