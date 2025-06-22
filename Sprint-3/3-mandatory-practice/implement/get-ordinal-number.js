function getOrdinalNumber(num) {
  let numStr = num.toString(); // convert input to char string
  let numLastDigit = numStr.slice(-1); // get the last char

  // if ends in 1
  if (numLastDigit == "1") {
    if (num == 11) {
      // catch special case 11
      return numStr + "th";
    } else {
      return numStr + "st";
    }
  }

  // if ends in 2
  else if (numLastDigit == "2") {
    if (num == 12) {
      // catch special case 12
      return numStr + "th";
    } else {
      return numStr + "nd";
    }
  }

  // if ends in 3
  else if (numLastDigit == "3") {
    if (num == 13) {
      // catch special case 13
      return numStr + "th";
    } else {
      return numStr + "rd";
    }
  }

  // other
  else {
    return numStr + "th";
  }
}

module.exports = getOrdinalNumber;
