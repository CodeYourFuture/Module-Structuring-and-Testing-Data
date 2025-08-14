function getOrdinalNumber(num) {
  let ordinal = "";
  switch (true) {
    case num == 1 || (num % 10 == 1 && num != 11):
      ordinal = `${num}st`;
      break;
    case num == 11:
      ordinal = `${num}th`;
      break;
    case num == 2 || num == 22:
      ordinal = `${num}nd`;
      break;
    case num == 3 || (num % 10 == 3 && num != 13):
      ordinal = `${num}rd`;
      break;
    default:
      ordinal = `${num}th`;
      break;
  }
  return ordinal;
}

module.exports = getOrdinalNumber;
