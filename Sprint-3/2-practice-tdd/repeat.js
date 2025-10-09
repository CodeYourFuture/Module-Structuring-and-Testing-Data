function repeat(str, count) {
  if (typeof str !== "string") {
    throw new Error("Input str should be a string in format 'Hello'");
  }
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error("Count should be a positive integer number");
  }
  return str.repeat(count);
}

module.exports = repeat;
