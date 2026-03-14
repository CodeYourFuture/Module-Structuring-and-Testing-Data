function repeatStr(word, times) {
  if (times < 0) {
    throw new Error("negative number is not allowed");
  } else if (times === 0) {
    return "";
  } else {
    return word.repeat(times);
  }
}
module.exports = repeatStr;
