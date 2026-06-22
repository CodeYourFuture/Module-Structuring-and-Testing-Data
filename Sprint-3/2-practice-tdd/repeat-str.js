function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let combinedStr = "";
  if (count < 0) throw new Error("Invalid Count");

  for (let i = 0; i < count; i++) {
    combinedStr += str;
  }
  return combinedStr;
}

module.exports = repeatStr;
