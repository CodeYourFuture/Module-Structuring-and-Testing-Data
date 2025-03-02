function repeat(str, count) {
  if (count > 0) {
    const repeatedStr = str.repeat(count);
    return repeatedStr;
  } else if (count == 0) {
    return "";
  } else {
    throw new Error("Error: negative numbers are not allowed");
  }
}

module.exports = repeat;
