// function getOrdinalNumber(num) {
// return "1st";
// }

// module.exports = getOrdinalNumber;

function getOrdinalNumber(num) {
    const lastTwo = num % 100;
    const lastDigit = num % 10;
  
    if (lastTwo >= 11 && lastTwo <= 13) {
      return `${num}th`;
    }
  
    if (lastDigit === 1) return `${num}st`;
    if (lastDigit === 2) return `${num}nd`;
    if (lastDigit === 3) return `${num}rd`;
  
    return `${num}th`;
  }
  
  module.exports = getOrdinalNumber;
