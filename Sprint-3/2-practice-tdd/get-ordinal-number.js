function getOrdinalNumber(num) {
  if (Number.isInteger(num) && num >= 0) {
    const lastDigit = num % 10;

    if (lastDigit === 1) {
      if (num === 11) {
        return `${num}th`;
      }

      return `${num}st`;
    } else if (lastDigit === 2) {
      if (num > 10) {
        if (num % 100 === 12) {
          return `${num}th`;
        }
      }
      return `${num}nd`;
    } else if (lastDigit === 3) {
      if (num > 10) {
        if (num % 100 === 13) {
          return `${num}th`;
        }
      }
      return `${num}rd`;
    }

    return `${num}th`;
  } else {
    throw new Error("wrong input used please enter an integer from 0 upwards");
  }
}

module.exports = getOrdinalNumber;
