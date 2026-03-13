function repeatStr(n, str) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatStr;
