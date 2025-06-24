function repeat(str, count) {
  if (count == 1) return `${str}`;
  else if (count == 0) return "";
  else if (count < 0) return "negative counts are not valid";
  else return `${str.repeat(count)}`;
}

module.exports = repeat;
