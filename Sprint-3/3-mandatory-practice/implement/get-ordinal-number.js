function getOrdinalNumber(num) {
  //  return "1st"; //always returns "1st" no matter what input is provided
  const lastTwo = num % 100;
  const lastDigit = num % 10;
  if (lastTwo >= 11 && lastTwo <= 13) {
    return num + "th";
  }

  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
module.exports = getOrdinalNumber;

// console.log(getOrdinalNumber(1)); // "1st"
// console.log(getOrdinalNumber(2)); // "2nd"
// console.log(getOrdinalNumber(3)); // "3rd"
// console.log(getOrdinalNumber(4)); // "4th"
// console.log(getOrdinalNumber(51)); // "51st"
// console.log(getOrdinalNumber(102)); // "102nd"
// console.log(getOrdinalNumber(1114)); // "1114th"
