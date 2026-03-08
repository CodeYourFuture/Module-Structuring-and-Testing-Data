function repeatStr(str, count) {
  if (count >= 1) {
    return str.repeat(count);
  } else if (count === 0) {
    return "";
  } else {
    throw new Error("Invalid count");
  }
}

module.exports = repeatStr;
