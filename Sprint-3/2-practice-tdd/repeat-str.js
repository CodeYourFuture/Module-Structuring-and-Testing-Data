// function repeatStr() {
   // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
//   return "hellohellohello";
// }

// module.exports = repeatStr;
function repeatStr(string, times) {
  let result = "";

  for (let i = 0; i < times; i++) {
    result += string;
  }

  return result;
}

module.exports = repeatStr;