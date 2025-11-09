function repeat(str, count) {
  if (count < 0) {
    throw new Error("count must be non-negative");
  }
  return str.repeat(count);
}

module.exports = repeat;


