// lets develop our function.
function getOrdinalNumber(num) {
  const lastDigit = num % 10; // ==> 111 % 10 = 11.1 last digit is 1.
  const lastTwoDigits = num % 100; // 111 % 100 = 111 last two digits 11.

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`; // ==> finds the last two digits to equal (11,12,13)
  }
  if (lastDigit == 1) {
    return `${num}st`;
  } else if (lastDigit == 2) {
    return `${num}nd`;
  } else if (lastDigit == 3) {
    return `${num}rd`;
  } else return `${num}th`;
}

module.exports = getOrdinalNumber;
