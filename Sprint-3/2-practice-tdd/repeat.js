function repeat(word, n) {
  if (typeof n !== 'number' || n < 0) {
   throw new Error("Count must be a non-negative integer");
  }
  if (n === 0) {
    return "";
  }
  return word.repeat(n);
}

module.exports = repeat;


