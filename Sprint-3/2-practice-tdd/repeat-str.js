function repeatStr(str,count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

}
console.log(repeatStr("hello", 3)); // Output: "hellohellohello"
module.exports = repeatStr;
