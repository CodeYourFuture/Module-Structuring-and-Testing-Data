function getOrdinalNumber(num) {
  let lastTwoDigits = num % 100;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${num}` + "th";
  }
  let lastDigit = num % 10;
  if (lastDigit === 1) {
    return `${num}` + "st";
  } else if (lastDigit === 2) {
    return `${num}` + "nd";
  } else if (lastDigit === 3) {
    return `${num}` + "rd";
  } else {
    return `${num}` + "th";
  }
}
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(131));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(432));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(33));
console.log(getOrdinalNumber(303));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(66));
console.log(getOrdinalNumber(100));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(111));
console.log(getOrdinalNumber(212));
console.log(getOrdinalNumber(313));

module.exports = getOrdinalNumber;
