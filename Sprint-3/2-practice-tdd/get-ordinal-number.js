function getOrdinalNumber(num) {
  let strNum;
  const lastNum = num % 10;
  const lastTwoNums = num % 100;
  if (lastNum === 1 && lastTwoNums !== 11) {
    strNum = `${String(num)}st`;
  } else if (lastNum === 2 && lastTwoNums !== 12) {
    strNum = `${String(num)}nd`;
  } else if (lastNum === 3 && lastTwoNums !== 13) {
    strNum = `${String(num)}rd`;
  } else {
    strNum = `${String(num)}th`;
  }
  return strNum;
}

module.exports = getOrdinalNumber;
