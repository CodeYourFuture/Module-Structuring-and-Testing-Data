function getOrdinalNumber(num) {
    const lastTwo = num % 100;
    const lastOne = num % 10;
  
    if (lastTwo >= 11 && lastTwo <= 13) {
      return num + "th";
    }
  
    if (lastOne === 1) {
      return num + "st";
    } else if (lastOne === 2) {
      return num + "nd";
    } else if (lastOne === 3) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
      

module.exports = getOrdinalNumber;

