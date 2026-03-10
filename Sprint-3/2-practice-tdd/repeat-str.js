function repeatStr(str, count) {
  if (count >= 0) {
    return str.repeat(count);
  } else {
    throw new Error("Count must be a non-negative number.");
  }
}

module.exports = repeatStr;
