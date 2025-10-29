function repeat(str, count) {
  if ( arguments.length !== 2) {
    return "Function requires exactly 2 arguments";
  }
  if (typeof str !== "string") {
    return "First argument must be a string";
  }
  if (!Number.isInteger(count) || count < 0) {
    return "Second argument must be a non-negative integer";
  }
  return str.repeat(count);
}

module.exports = repeat;
