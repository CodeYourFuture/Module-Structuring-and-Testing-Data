function repeatStr(str, num) {
  let result = "";
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

  if (num < 0) {
    throw new Error();
  }

  return str.repeat(num);
}

module.exports = repeatStr;
