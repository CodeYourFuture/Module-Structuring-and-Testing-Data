function repeat(str, count) {
  if (count < 0) {
    return "Count must be non-negative";
  }
  return str.repeat(count);
}
module.exports = repeat;
