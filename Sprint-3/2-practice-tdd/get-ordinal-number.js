function getOrdinalNumber(num) {
  let ordinalNum;
  if (Number.isInteger(num) === true) {
    if (
      Math.abs(num % 100) === 11 ||
      Math.abs(num % 100) === 12 ||
      Math.abs(num % 100) === 13 ||
      Math.abs(num % 10) === 4 ||
      Math.abs(num % 10) === 5 ||
      Math.abs(num % 10) === 6 ||
      Math.abs(num % 10) === 7 ||
      Math.abs(num % 10) === 8 ||
      Math.abs(num % 10) === 9 ||
      Math.abs(num % 10) === 0
    ) {
      ordinalNum = `${num}th`;
    } else if (Math.abs(num % 10) === 1) {
      ordinalNum = `${num}st`;
    } else if (Math.abs(num % 10) === 2) {
      ordinalNum = `${num}nd`;
    } else if (Math.abs(num % 10) === 3) {
      ordinalNum = `${num}rd`;
    } else {
      ordinalNum = `${num}th`;
    }
  } else {
    ordinalNum = "Invalid input: Input is an integer";
  }
  return ordinalNum;
}
module.exports = getOrdinalNumber;
