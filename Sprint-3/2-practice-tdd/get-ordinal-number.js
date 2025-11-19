function getOrdinalNumber(num) {
  const lastDigit = num.toString()[num.toString().length - 1];

  if (lastDigit === "1") {
    if (num === 11) {
      return `${num}th`;
    }

    return `${num}st`;
  } else if (lastDigit === "2") {
    if (num.toString().length > 1) {
      const last2Digits = num.toString().slice(-2);

      if (last2Digits === "12") {
        return `${num}th`;
      }
    }
    return `${num}nd`;
  } else if (lastDigit === "3") {
    if (num.toString().length > 1) {
      const last2Digits = num.toString().slice(-2);

      if (last2Digits === "13") {
        return `${num}th`;
      }
    }
    return `${num}rd`;
  }

  return `${num}th`;
}

module.exports = getOrdinalNumber;
