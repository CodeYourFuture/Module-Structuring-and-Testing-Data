function repeat(word, times) {
  if (times < 0) {
    throw new Error("Times must be a non-negative integer");
  }
  return word.repeat(times);
}
console.log(repeat("hello", 3)); // The output should be "hellohellohello"

module.exports = repeat;
