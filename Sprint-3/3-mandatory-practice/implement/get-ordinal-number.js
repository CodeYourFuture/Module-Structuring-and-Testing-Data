function getOrdinalNumber(num) {
  let lastNumber = num % 10; // Using the modulo operator to get the last digit of the number.
  let lastTwoNumbers = num % 100; //Using the modulo operator to get the last two digits of the number.

  if (lastTwoNumbers === 11 || lastTwoNumbers === 12 || lastTwoNumbers === 13) {
    return num + "th";
  }

  if (lastNumber === 1) {
    return num + "st";
  } else if (lastNumber === 2) {
    return num + "nd";
  } else if (lastNumber === 3) {
    return num + "rd";
  } else {
    return num + "th";
  }
}

console.log(getOrdinalNumber(3));

module.exports = getOrdinalNumber;
