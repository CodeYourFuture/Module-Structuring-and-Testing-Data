// Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
// The goal is to re-implement that function, not to use it.

function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must not be negative");
  }
  let newString = "";
  for (let i = 0; i < count; i++) {
    newString += str;
  }

  return newString;
}

module.exports = repeatStr;
