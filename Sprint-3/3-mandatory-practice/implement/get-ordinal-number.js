function getOrdinalNumber(num) {
  let x = num % 10;
  let y = num % 100;

  if (x === 1 && y !== 11) {
    return num + "st";
  } else if (x === 2 && y !== 12) {
    return num + "nd";
  } else if (x === 3 && y !== 13) {
    return num + "rd";
  } else return num + "th";
}
console.log(getOrdinalNumber(15));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(111));
module.exports = getOrdinalNumber;
