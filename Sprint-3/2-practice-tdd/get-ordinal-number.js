function getOrdinalNumber(num) {
  if (typeof num !== "number") {
    return NaN;
  }
  if(!Number.isInteger(num)){
    return "not an integer number";
  }
  if(num === 0 ){
    return "invalid number";
  }

  const lastDigit = Number(num.toString().slice(-1));
  const lastTwoDigits = Number(num.toString().slice(-2));

  if (lastTwoDigits >= 10 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  }

  return `${num}th`;
}

module.exports = getOrdinalNumber;
