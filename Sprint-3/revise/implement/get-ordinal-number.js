function getOrdinalNumber(number) {
    if (number === 1) {
      return number + "st";
    } else if (number === 2) {
      return number + "nd";
    } else if (number === 3) {
      return number + "rd";
    }  
  }

  module.exports = getOrdinalNumber;
 