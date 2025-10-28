function getOrdinalNumber(number) {
  if (number % 100 >= 11 && number % 100 <= 13) {
    return number + "th";
  } else {
    const lastdigit = number.toString().slice(-1);

    if (lastdigit == 1) return number + "st";
    if (lastdigit == 2) return number + "nd";
    if (lastdigit == 3) return number + "rd";
    return number + "th";
  }
}

module.exports = getOrdinalNumber;
