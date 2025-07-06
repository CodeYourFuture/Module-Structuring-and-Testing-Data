function repeat(str, count) {
  if (count < 0) {
    throw new Error("Invalid input: count must be non-negative");
  }
  return String(str).repeat(count);
}


module.exports = repeat;