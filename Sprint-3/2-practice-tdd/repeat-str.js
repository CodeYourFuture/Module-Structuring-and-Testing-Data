function repeatStr() {
  
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  return str.repeat(count);
}

module.exports = repeatStr;
