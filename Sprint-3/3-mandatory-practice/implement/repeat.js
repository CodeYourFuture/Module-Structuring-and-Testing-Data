function repeat(str, count) {
  if (typeof count !== "number" || !Number.isInteger(count) || isNaN(count)) {
    throw new Error("Count is an invalid input");
  }
  if (count > 0) {
    return str.repeat(count);
  }
  if (count === 0) {
    return "";
  }
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
}

module.exports = repeat;
