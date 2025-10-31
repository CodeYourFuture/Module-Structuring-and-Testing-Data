function getOrdinalNumber(num) {
  if (num <= 0) return "Invalid Input";
  if (num % 100 === 11) return `${num}th`; // check the last two digit if it exception 11, 12 or 13
  if (num % 100 === 12) return `${num}th`;
  if (num % 100 === 13) return `${num}th`;
  const remainder = num % 10;
  switch (remainder) {
    case 1:
      return `${num}st`;

    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;

    default:
      return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
