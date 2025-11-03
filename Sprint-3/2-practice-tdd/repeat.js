function repeat(word, times) {
  if (times < 0) {
    throw new Error("Count must be a non-negative number");
  }
  return word.repeat(times);
}

module.exports = repeat;
