
    function getOrdinalNumber(number) {
        let lastDigit = number % 10; // Get the last digit of the number
        let lastTwoDigits = number % 100; // Get the last two digits to handle special cases
      
        // Special case for 11, 12, and 13
        if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
          return number + "th";
        }
      
        // Handle cases based on the last digit
        if (lastDigit === 1) return number + "st";
        if (lastDigit === 2) return number + "nd";
        if (lastDigit === 3) return number + "rd";
      
        // Default case (everything else gets "th")
        return number + "th";
      }


module.exports = getOrdinalNumber;