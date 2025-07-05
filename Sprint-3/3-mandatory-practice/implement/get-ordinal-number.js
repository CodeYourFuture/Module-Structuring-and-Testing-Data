function getOrdinalNumber(num) {
  const v = num % 100;
  if (v >= 11 && v <= 13) {
    return num + "th";
  }

  switch (num % 10) {
    case 1: return num + "st";
    case 2: return num + "nd";
    case 3: return num + "rd";
    default: return num + "th";
  }
}

module.exports = getOrdinalNumber;
