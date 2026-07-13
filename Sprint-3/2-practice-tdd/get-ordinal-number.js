function getOrdinalNumber(num) {
  let onesDigit;

  if (String(num).length > 1) {
    //check if the number has more than 1 digit
    onesDigit = Number(String(num).slice(-1)); //extract the figure at the tens digit, and convert it into a number.
    const tensDigit = Number(String(num).slice(-2, -1)); //extract the figure at the tens digit, and convert it into a number.

    if (onesDigit == 1) {
      if (tensDigit == 1) {
        return num + "th";
      } else {
        return num + "st";
      }
    } else if (onesDigit == 2) {
      if (tensDigit == 1) {
        return num + "th";
      }
      return num + "nd";
    } else if (onesDigit == 3) {
      if (tensDigit == 1) {
        return num + "th";
      }
      return num + "rd";
    } else {
      ("th");
    }
  } else if (String(num).length == 1) {
    onesDigit = Number(String(num)[0]); //extract the figure at the tens digit, and convert it into a number.
    if (onesDigit == 1) {
      return num + "st";
      console.log("Yeah youre in");
    } else if (onesDigit == 2) {
      return num + "nd";
    } else if (onesDigit == 3) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
}

module.exports = getOrdinalNumber;
