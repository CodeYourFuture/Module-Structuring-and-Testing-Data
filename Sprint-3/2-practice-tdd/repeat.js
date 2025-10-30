function repeat(valueToRepeat, numOfTimes) {
  // Validate count
  if (!Number.isInteger(numOfTimes)) {
    return "Invalid count: count should be an integer";
  }
  if (numOfTimes < 0) {
    return "Negative number invalid";
  }
  if (numOfTimes === 0) {
    return "";
  }

  // Convert arrays to empty string
  if (Array.isArray(valueToRepeat)) {
    valueToRepeat = "";
  }

  // Convert other types to string
  const strValue = String(valueToRepeat);

  // Repeat the string
  let repeatedValue = "";
  for (let i = 0; i < numOfTimes; i++) {
    repeatedValue += strValue;
  }

  return repeatedValue;
}

module.exports = repeat;
