function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  if (count === 0) {
    return "";
  }

  let repeatedStr = "";

  for (let i = 0; i < count; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

module.exports = repeatStr;
