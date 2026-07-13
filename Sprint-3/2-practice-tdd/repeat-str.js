function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Error");
  }

  let repeatedString = "";
  for (let i = 0; i < count; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

module.exports = repeatStr;
