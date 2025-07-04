function repeat(str, count) {
  if (count < 0) {
    throw new Error("count must be a non-negative integer");
  } else if (count === 0) {
    return "";
  } else if (count > 0) {
    return str.repeat(count);
  }
}

module.exports = repeat;
