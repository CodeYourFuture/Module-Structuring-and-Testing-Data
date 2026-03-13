function repeatStr(str, num) {
  if (num < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatStr;
