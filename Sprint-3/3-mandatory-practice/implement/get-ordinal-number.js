function getOrdinalNumber(num) {
  let numStr = num.toString(); // Convert number to string
 let lastDigit = numStr[numStr.length - 1]; // Get last digit as string
 let lastTwoDigits = numStr.slice(-2); // Get last two digits as string

  //We have three special cases for the numbers 11, 12, 13
  if (lastTwoDigits === "11" || lastTwoDigits === "12" || lastTwoDigits === "13") {
    return numStr + "th";
  }

  //We use last digit to determine ordinal for all other numbers
  if (lastDigit === "1") return numStr + "st";
  else if (lastDigit === "2") return numStr + "nd";
  else if (lastDigit === "3") return numStr + "rd";
  else return numStr + "th";
}

module.exports = getOrdinalNumber;