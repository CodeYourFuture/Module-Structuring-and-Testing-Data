function repeat(str, num) {
  let repeatedStr = "";
  if (num < 0) {
    throw new Error("negative counts are not valid");
  }
  if (num == 0) {
    return "";
  }
  if (num == 1) {
    return str;
  }
  if (num > 1) {
    for (let i = 1; i <= num; i++) {
      repeatedStr = repeatedStr + str;
    }
    return repeatedStr;
  }
}

module.exports = repeat;
