function repeat(str, count = 1) {
  count = Math.floor(count);
  if (count < 1) {
    return str;
  }

  str = String(str);
  return str.repeat(count);
}

module.exports = repeat;