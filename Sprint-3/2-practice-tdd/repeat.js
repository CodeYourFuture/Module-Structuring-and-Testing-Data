function repeat(str, count) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  return str.repeat(count);
}

module.exports = repeat;


// Function implemented to repeat string count times. 