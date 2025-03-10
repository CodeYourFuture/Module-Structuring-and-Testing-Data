function repeat(str, count) {
  if (count < 0) {
    // return "Count cannot be negative";
    throw new Error("Count cannot be negative");
  } else {
    return str.repeat(count);
  }
}

module.exports = repeat;
