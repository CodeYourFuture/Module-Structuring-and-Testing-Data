function getOrdinalNumber(num) {
  if (typeof num != "number" || !Number.isInteger(num)) {
    throw new Error("Please enter an integer");
  }

  const positiveNumber = Math.abs(num);

  let suffix;

  switch (true) {
    case positiveNumber % 10 === 1 && positiveNumber % 100 !== 11:
      suffix = "st";
      break;
    case positiveNumber % 10 === 2 && positiveNumber % 100 !== 12:
      suffix = "nd";
      break;
    case positiveNumber % 10 === 3 && positiveNumber % 100 !== 13:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return `${num}${suffix}`;
}

module.exports = getOrdinalNumber;
