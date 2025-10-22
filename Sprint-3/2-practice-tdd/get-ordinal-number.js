function getOrdinalNumber(num) {
  switch (num % 100) {
    case 11:
    case 12:
    case 13:
      return num + "th";
      break;
  }
  switch (num % 10) {
    case 1:
      return num + "st";
      break;
    case 2:
      return num + "nd";
      break;
    case 3:
      return num + "rd";
      break;
    default:
      return num + "th";
      break;
  }
}

module.exports = getOrdinalNumber;
