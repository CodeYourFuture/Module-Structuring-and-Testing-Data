function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count < 0) {
    return "Invalid count";
  }

  let new_String = "";

  for (let counter = 0; counter < count; counter++) {
    new_String = str + new_String;
  }

  return new_String;
}

console.log(repeatStr("hell", -1));

module.exports = repeatStr;
