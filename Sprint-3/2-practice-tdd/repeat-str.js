function repeatStr(str, num) {
   // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  //return "hellohellohello";
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
