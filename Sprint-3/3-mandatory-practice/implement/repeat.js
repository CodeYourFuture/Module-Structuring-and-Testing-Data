function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count must be non-negative");
  }
  if (count === 0) {
    return "";
  }
  return str.repeat(count);
}

module.exports = repeat;
