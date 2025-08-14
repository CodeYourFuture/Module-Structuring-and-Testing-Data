function repeat(str, count) {
  if (count >= 0) {
    return str.repeat(count);
  } else if (count < 0) {
    return "invalid number";
  } else {
    return "invalid input";
  }
}

module.exports = repeat;
