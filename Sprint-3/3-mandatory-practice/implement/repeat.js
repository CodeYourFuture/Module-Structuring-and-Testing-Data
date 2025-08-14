function repeat(str, count) {
  if (typeof count !== "number" || !Number.isInteger(count) || isNaN(count)) {
    throw new Error("Count is an invalid input");
  }
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  return str.repeat(count);
}

module.exports = repeat;
