function getOrdinalNumber(num) {
  let numStr = num.toString(); // convert input to char string
  let numLastDigit = numStr.slice(-2); // get the last two char

  if (numLastDigit === "11" || numLastDigit === "12" || numLastDigit === "13") {
    // catch 11, 12, 13
    return numStr + "th";
  }

  numLastDigit = numStr.slice(-1); // get the last char

  // if ends in 1
  if (numLastDigit === "1") {
    return numStr + "st";
  }

  // if ends in 2
  else if (numLastDigit === "2") {
    return numStr + "nd";
  }

  // if ends in 3
  else if (numLastDigit === "3") {
    return numStr + "rd";
  }

  // other
  else {
    return numStr + "th";
  }
}

module.exports = getOrdinalNumber;
