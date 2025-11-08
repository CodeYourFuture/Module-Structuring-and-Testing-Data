function repeatStr(str, count) {
  if (count < 0) {
    return "Error, negative integer";
  }

  return str.repeat(count);
}

module.exports = repeatStr;
