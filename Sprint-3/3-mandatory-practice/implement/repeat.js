function repeat(str, count) {
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  return str.repeat(count);
}

module.exports = repeat;

console.log(repeat("hello", 1));
