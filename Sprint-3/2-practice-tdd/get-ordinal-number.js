function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  } else if (num === 2) {
    return "2nd";
  } else if (num === 3) {
    console.log(num);
    return "3rd";
  } else if (num > 3 || num < 21) {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
