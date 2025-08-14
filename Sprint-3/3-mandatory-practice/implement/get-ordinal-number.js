function getOrdinalNumber(num) {
  //identify the ordinal number for numbers below 11
  if (num < 11 && num > 0) {
    switch (num) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      case 4:
        return "4th";
      case 5:
        return "5th";
      case 6:
        return "6th";
      case 7:
        return "7th";
      case 8:
        return "8th";
      case 9:
        return "9th";
      case 10:
        return "10th";
    }
  } else if(num > 10 && num < 21) {
      return num + "th";
  } else if (num > 20) { 
    const lastDigit = num % 10;
    switch (lastDigit) {
      case 1:
        return num + "st";
      case 2:
        return num + "nd";
      case 3:
        return num + "rd";
      default:
        return num + "th";
    }
  }
}

module.exports = getOrdinalNumber;