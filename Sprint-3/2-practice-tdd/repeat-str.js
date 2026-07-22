function repeatStr(str, count) {
  // Native String.prototype.repeat throws a RangeError for negative counts
  if (count < 0) {
    throw new RangeError("Invalid count value");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeatStr;
