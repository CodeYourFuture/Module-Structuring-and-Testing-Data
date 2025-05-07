function getOrdinalNumber(num) {
 
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
      }
    
      // Handle general cases based on the last digit of the number
      const lastDigit = num % 10;
    
      if (lastDigit === 1) return num + "st"; // (should return 1st, 21st, 31st, etc).
      if (lastDigit === 2) return num + "nd"; // (should return 2nd, 22nd, 32nd, etc).
      if (lastDigit === 3) return num + "rd"; // (should return 3rd, 23rd, 33rd, etc).
      
      return num + "th"; // Everything else (i.e. 4th, 5th, 6th, etc).
    }

module.exports = getOrdinalNumber;