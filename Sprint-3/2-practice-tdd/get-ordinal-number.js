function getOrdinalNumber(num) {
  const str = num.toString();
  const lastTwo = str.slice(-2);
  const lastDigit = str.slice(-1);

  let suffix;
  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    suffix = 'th';
  } else if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return str + suffix;
}

module.exports = getOrdinalNumber;
