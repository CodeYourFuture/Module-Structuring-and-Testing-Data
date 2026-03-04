function repeatStr(word, times) {
  if (times > 0) {
    return word.repeat(times);
  } else if (times < 0) {
    return "Error:negative number not allowed";
  } else {
    return "";
  }
}
module.exports = repeatStr;
