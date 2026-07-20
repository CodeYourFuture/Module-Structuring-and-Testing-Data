function repeatStr(str,count) {
  // validate input first
  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  
  return result;
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

}
console.log(repeatStr("hello", 3)); // Output: "hellohellohello"
console.log(repeatStr("hello", 1)); // Output: "hello"
console.log(repeatStr("hello", 0)); // Output: ""
module.exports = repeatStr;
