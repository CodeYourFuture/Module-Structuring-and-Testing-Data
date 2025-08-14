function repeat(str, count) {
  if (count > 0) return str.repeat(count);
  if (count === 0) return "";
  else if (count < 0) return "Error - The integer count must be positive";
}

module.exports = repeat;
