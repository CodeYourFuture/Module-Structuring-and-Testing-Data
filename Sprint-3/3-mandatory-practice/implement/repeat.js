function repeat(str, count) {
  if (count < 0) throw new Error(`Please enter positive number`);
  else if (count === 0) return "";
  else return str.repeat(count);
}

module.exports = repeat;
