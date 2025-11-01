function getOrdinalNumber(num) {
 const lastTwoDigits = num % 100; // gets the last two digits of the number because some like 11, 12, 13 are special cases.
 const lastDigit= num % 10; // gets the last digit to decide if its going to be "St, Nd, Rd"

 // handles special cases like "11,12,13" to always end in the "Th"
 if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13){
  return num + "St";
}

}

module.exports = getOrdinalNumber;
