function getOrdinalNumber(num) {
  if (num === 1 || num === 21) {
    return `${num}st`;
  } else if (num === 11) {
    return `${num}th`;
  } else if (num === 2) {
    return `${num}nd`;
  }
}


module.exports = getOrdinalNumber;
