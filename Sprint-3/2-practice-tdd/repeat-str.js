function repeatStr() {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

    for (let i = 0; i < count; i++) {
        result += str;
    }

    if (count >= 0) {
        return result;
    }
    else {
        throw new Error("Count cannot be negative");
    }
}

module.exports = repeatStr;
