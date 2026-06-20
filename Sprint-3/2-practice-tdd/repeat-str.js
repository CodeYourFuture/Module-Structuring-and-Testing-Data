function repeatStr(str, count) {
  if (typeof str !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!Number.isInteger(count) || count < 0) {
    throw new TypeError("Count must be a non-negative integer");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatStr;
