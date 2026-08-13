function repeatStr(str, times) {
  if (typeof times !== "number" || !Number.isInteger(times)) {
    throw new Error("count must be a whole number");
  }
  if (times < 0) {
    throw new Error("count cannot be negative");
  }

  let repeatedString = "";

  for (let i = 0; i < times; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

module.exports = repeatStr;
