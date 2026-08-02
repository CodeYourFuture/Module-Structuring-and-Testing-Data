// function repeatStr() {
   // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
//   return "hellohellohello";
function repeatStr(string, times) {
  let result = "";

  if (times < 0) {
    throw new Error("Count cannot be negative");
  }

  for (let i = 0; i < times; i++) {
    result += string;
  }

  return result;
}

module.exports = repeatStr;