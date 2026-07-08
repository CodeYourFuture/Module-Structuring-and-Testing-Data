function repeatStr(stringOfCharacters, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count === 0) {
    return "";
  } else if (count > 0) {
    return repeatStr(stringOfCharacters, count - 1) + stringOfCharacters;
  }
  throw Error("Invalid input: count must be a non-negative integer");
}
module.exports = repeatStr;
