function repeat(str, count) {
  if (str === "") return "Input string is empty!";
  if (count < 0) return "Invalid count value";
  return str.repeat(count);
}

module.exports = repeat;
