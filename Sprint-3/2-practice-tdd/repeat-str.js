function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  // If count is 0, .repeat(0) naturally returns an empty string "".
  // If count is 1, .repeat(1) naturally returns the original string.
  return str.repeat(count);
  //return "hellohellohello";
}

module.exports = repeatStr;
