function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be positive");
  }

  if (count === 0) {
    return " ";
  }

  return str.repeat(count);
}

module.exports = repeatStr;
