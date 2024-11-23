// repeat.js
function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }
  return count === 0 ? "" : str.repeat(count);
}

module.exports = repeat;
