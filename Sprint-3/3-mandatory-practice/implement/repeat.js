function repeat(str = "", count = 1) {
  if (count < 0) {
    throw new Error("Invalid count");
  }

  return str.repeat(count);
}

module.exports = repeat;
