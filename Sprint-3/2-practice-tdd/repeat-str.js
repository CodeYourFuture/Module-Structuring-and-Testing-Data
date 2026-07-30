function repeatStr(str, num) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (num < 0) {
    throw new Error();
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

module.exports = repeatStr;
