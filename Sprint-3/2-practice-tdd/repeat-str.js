function repeatStr(str, count) {
  if (count < 0) {
    throw Error("Negative counts are invalid");
  }
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatStr;
