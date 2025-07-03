// function repeat() {
//     return "hellohellohello";
// }
// The function always returns "hellohellohello" regardless of any input.
// There are no parameters, so it’s not flexible or reusable.
function repeat(str, count) {
  if (!Number.isInteger(count) || count < 0) {
    return "Error: Count must be a non-negative integer";
  }
  return str.repeat(count);
}

module.exports = repeat;
//  Example usage:
// console.log(repeat("hello", 3)); // Expected: "hellohellohello"
// console.log(repeat("at", 5)); // Expected: "atatatatat"
// console.log(repeat("test0", 0)); // Expected: ""
// console.log(repeat("", 5)); // Expected: ""
// console.log(repeat("WE", 1)); // Expected: "hi"
