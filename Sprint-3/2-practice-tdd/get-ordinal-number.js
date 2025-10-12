function getOrdinalNumber(num) {
  if (num === 1) {
    return "1st";
  }
  if (num === 2) {
    return "2nd";
  }
  if (num === 3) {
    return "3rd";
  }
  return num + "th";  
}

module.exports = getOrdinalNumber;
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(22));
