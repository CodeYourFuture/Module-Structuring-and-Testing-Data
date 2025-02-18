function repeat(str, count) {
  if (count === 0) return "";
  else if (count < 0) return "Please enter positive number!";
  else return str.repeat(count);
}

module.exports = repeat;
