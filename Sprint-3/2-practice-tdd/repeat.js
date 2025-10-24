function repeat(str, count) {
  // Validate inputs
  if (typeof str !== "string") {
    throw new Error("First argument must be a string");
  }

  if (typeof count !== "number" || count < 0) {
    throw new Error("Count must be a non-negative number");
  }

  // Repeat string count times
  return str.repeat(count);
}

module.exports = repeat;
