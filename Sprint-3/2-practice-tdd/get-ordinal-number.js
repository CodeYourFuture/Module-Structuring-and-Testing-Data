function getOrdinalNumber(num) {
  num = num.toString();
  if (
    num.slice(-2) === "11" ||
    num.slice(-2) === "12" ||
    num.slice(-2) === "13"
  ) {
    return num + "th";
  } else if (num.slice(-1) === "1") {
    return num + "st";
    return num + "st";
  } else if (num.slice(-1) === "2") {
    return num + "nd";
  } else if (num.slice(-1) === "3") {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(5));
console.log(getOrdinalNumber(6));
console.log(getOrdinalNumber(7));
console.log(getOrdinalNumber(8));
console.log(getOrdinalNumber(9));
console.log(getOrdinalNumber(10));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(23));
console.log(getOrdinalNumber(101));
console.log(getOrdinalNumber(111));
console.log(getOrdinalNumber(112));
console.log(getOrdinalNumber(113));
