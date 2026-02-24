function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("invalid input: negative number");
  }
  if (count === 1) {
    return str;
  }

  if (count === 0) {
    return "";
  }

  if (count > 1) {
    return str.repeat(count);
  }
}

module.exports = repeatStr;
