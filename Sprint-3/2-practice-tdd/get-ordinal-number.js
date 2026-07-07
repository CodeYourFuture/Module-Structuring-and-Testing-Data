function getOrdinalNumber(num) {
  const dictionary = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  const lastTwoDigit = num % 100;
  const lastDigit = num % 10;

  if (lastTwoDigit == 11 || lastTwoDigit == 12 || lastTwoDigit == 13) {
    return `${num}` + `th`;
  }

  const ending = dictionary[lastDigit] || "th";
  return `${num}${ending}`;
}

module.exports = getOrdinalNumber;
