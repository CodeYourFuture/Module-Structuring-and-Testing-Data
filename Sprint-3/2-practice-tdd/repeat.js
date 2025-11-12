function repeat(str, count) {
  if (!Number.isInteger(count) || count < 0) {
    throw Error("Invalid count value");
  }
  return str.repeat(count);
}

module.exports = repeat;
