function repeatStr(str, num) {
  var result = "";
  var i;
  if (num < 0) {
    throw new Error("negative numbers are not valid");
  } else {
    for (i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}

module.exports = repeatStr;
