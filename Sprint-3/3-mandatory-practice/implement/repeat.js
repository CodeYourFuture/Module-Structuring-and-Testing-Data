function repeat(str, count) {
  if (typeof str !== "string") {
    throw new Error("First argument must be a string");
  }
  if (typeof count !== "number" || count < 0) {
    throw new Error("Second argument must be a non-negative number");
  }

  return str.repeat(count);
}

module.exports = repeat;
