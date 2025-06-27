function getOrdinalNumber(num) {
 const lastTwoDigits = num % 100; // gets the last two digits of the number because some like 11, 12, 13 are special cases.
 const lastDigit= num % 10; // gets the last digit to decide if its going to be "St, Nd, Rd"

 // handles special cases "11, 12 ,13" to always end in "Th".
  if(lastTwoDigits === 11 || lastTwoDigits === 11 || lastTwoDigits === 13){
    return num + "TH";
  }

 // will return "St" if the number ends in 1.
  if (lastDigit === 1){
    return num + "ST";
  }
// will return "Nd" if the number ends in 2.
  if (lastDigit === 2){
    return num + "ND";
  }
// will return "Rd" if the number ends in 3.
  if (lastDigit === 3){
    return num + "RD";
  }

// will return all numbers that end in 4, 5, 6, 7, 8, 9 with "Th".
  return num + "TH";
}

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(23));
console.log(getOrdinalNumber(24));

module.exports = getOrdinalNumber;