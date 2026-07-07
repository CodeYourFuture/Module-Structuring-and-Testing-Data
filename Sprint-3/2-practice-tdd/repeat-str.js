function repeatStr(str, count) {
  // Guard clause for invalid counts
  if (count < 0) {
    throw new RangeError("repeatStr count must be non-negative");
  }

  let result = "";

  // Append the string to the result string 'count' times
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeatStr;