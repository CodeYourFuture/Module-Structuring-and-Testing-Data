
function getOrdinalNumber(num) {
  const absNum = Math.abs(num); // handle negative numbers
  const lastTwo = absNum % 100; // get last two digits
  const lastDigit = absNum % 10; // get last digit

  if (lastTwo >= 11 && lastTwo <= 13) {
    return num + "th"; // exceptions: 11,12,13
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
console.log(getOrdinalNumber(12)); //printed 12th.
console.log(getOrdinalNumber(123)); // printed 123rd.
console.log(getOrdinalNumber(52));  // printed 52nd.

module.exports = getOrdinalNumber;
