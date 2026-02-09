function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Only positive integers accepted");
  }
  return str.repeat(count);
}

module.exports = repeatStr;
