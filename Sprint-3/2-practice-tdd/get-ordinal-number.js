<<<<<<< Updated upstream
function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
=======
function getOrdinalNumber(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + "th";
  }

  if (lastDigit === 1) {
    return number + "st";
  } else if (lastDigit === 2) {
    return number + "nd";
  } else if (lastDigit === 3) {
    return number + "rd";
  } else {
    return number + "th";
>>>>>>> Stashed changes
  }
}

module.exports = getOrdinalNumber;