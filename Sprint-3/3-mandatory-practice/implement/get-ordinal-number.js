function getOrdinalNumber(num) {
 return "1st";
}

module.exports = getOrdinalNumber;

function getOrdinalNumber(num) {
    // Handle special cases for 11, 12, and 13
    if (num % 100 >= 11 && num % 100 <= 13) return `${num}th`;
  
    // Determine the suffix based on the last digit
    const lastDigit = num % 10;
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
  