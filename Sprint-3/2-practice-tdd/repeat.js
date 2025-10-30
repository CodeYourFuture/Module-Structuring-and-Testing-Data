function repeat(valueToRepeat, numOfTimes) {
  // Validate valueToRepeat
  if (typeof valueToRepeat !== "string") {
    return "Invalid input: valueToRepeat should be a string";
  }
  // Validate numOfTimes
  if (!Number.isInteger(numOfTimes)) {
    return "Invalid input: numOfTimes should be an integer";
  }

  if (numOfTimes < 0) {
    return "Negative number invalid";
  }
  if (numOfTimes === 0) {
    return "";
  }


  // Repeat the string
  let repeatedValue = "";
  for (let i = 0; i < numOfTimes; i++) {
    repeatedValue += valueToRepeat;
  }

  return repeatedValue;
}

module.exports = repeat;
