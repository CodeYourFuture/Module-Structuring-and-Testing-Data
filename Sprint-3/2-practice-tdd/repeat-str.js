// Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
// The goal is to re-implement that function, not to use it.
function repeatStr(str, count) {
  if (typeof str !== "string") {
    return "";
  }
  if (count < 0) {
    throw new Error("Invalid input: count must be a non-negative integer");
  }

  let result = "";

  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}
console.log(repeatStr("hello", 3)); // Output: "hellohellohello"
console.log(repeatStr("fella", 1)); // Output: "fella"
console.log(repeatStr("fella", 0)); // Output: ""
console.log(repeatStr("ab", 3)); // Output: "ababab"
console.log(repeatStr("a", 1000).length); // Output: 1000
console.log(repeatStr("", 5)); // Output: ""
console.log(repeatStr([], 3)); // Output: ""
console.log(repeatStr(null, 3)); // Output: ""

module.exports = repeatStr;
