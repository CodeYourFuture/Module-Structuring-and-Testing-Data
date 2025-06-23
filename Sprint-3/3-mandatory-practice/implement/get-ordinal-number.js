function getOrdinalNumber(num) {
  let result;
  const lastTwoDigit = num.toString().slice(-2);

  if (["11", "12", "13"].includes(lastTwoDigit)) {
    result = `${num}th`;
  } else {
    const lastDigit = num.toString().slice(-1);
    if (lastDigit === "1") {
      result = `${num}st`;
    } else if (lastDigit === "2") {
      result = `${num}nd`;
    } else if (lastDigit === "3") {
      result = `${num}rd`;
    } else {
      result = `${num}th`;
    }
  }

  return result;
}

console.log(getOrdinalNumber(14));
module.exports = getOrdinalNumber;
