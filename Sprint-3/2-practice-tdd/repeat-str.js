function repeatStr(str, num) {
  let result = "";
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  for (let i = 0; i < num; i++) {
    result += str;
  }
  if (num > 0) {
    return result;
  } else if (num === 0) {
    return "";
  } else throw new error();
}

module.exports = repeatStr;
