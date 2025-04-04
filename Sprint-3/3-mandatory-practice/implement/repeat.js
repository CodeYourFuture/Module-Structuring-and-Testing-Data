function repeat(word, count) {
    if (count < 0) {
      throw new Error("Count cannot be negative");
    }
    return word.repeat(count);
  }

console.log (repeat ("hello"))

module.exports = repeat;