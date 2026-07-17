function repeatStr(str, num) {
  var result = "";
  var i;
  if (num < 0) {
    throw new Error("negative numbers are not valid");
  } else if (num === 0) {
    result = "";
  } else {
    for (i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}

//console.log(repeatStr("hello", -1));
//console.log(repeatStr("hello", 0));
//console.log(repeatStr("hello", 5))

module.exports = repeatStr;
