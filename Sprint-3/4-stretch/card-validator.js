function validateNumber(number) {
  const arrNumber = [...number.toString()];

  return arrNumber.length === 16 &&
    arrNumber.every((x) => x >= "0" && x <= "9") &&
    new Set(arrNumber).size > 1 &&
    arrNumber[arrNumber.length - 1] % 2 === 0 &&
    arrNumber.reduce((acc, cur) => +acc + +cur, 0) > 16
    ? true
    : false;
}

module.exports = validateNumber;
