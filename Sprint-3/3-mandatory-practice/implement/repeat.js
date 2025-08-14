function repeat(str, count) {
  if (count > 0) return `${str.repeat(count)}`;
  else if (count == 0) return "";
  else if (count < 0) return "negative counts are not valid";
}

module.exports = repeat;
