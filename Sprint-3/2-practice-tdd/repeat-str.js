function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

  if (count < 0) {
    throw Error("Negative counts are invalid");
  }
  let result = ""; 
  for (let i = 0; i < count; i++) {
    result += str; //result = result+str
  }
  return result;
}

module.exports = repeatStr;
