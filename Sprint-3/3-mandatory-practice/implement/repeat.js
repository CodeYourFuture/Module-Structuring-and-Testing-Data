
function repeat(str, count) {
    if (typeof str !== 'string') {
      throw new TypeError("First argument must be a string.");
    }
    if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) {
      throw new TypeError("Second argument must be a non-negative integer.");
    }
  
    let result = "";
    for (let i = 0; i < count; i++) {
      result += str;
    }
    return result;
  }
  

module.exports = repeat;