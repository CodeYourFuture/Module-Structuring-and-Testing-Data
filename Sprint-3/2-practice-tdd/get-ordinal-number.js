function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  console.log(v);
  if (v >= 11 && v <= 13) {
    return num + "th";
  }
  const suffix = suffixes[(v % 10)] || "th";
  return num + suffix;
}
console.log(getOrdinalNumber(52)); 

module.exports = getOrdinalNumber;
