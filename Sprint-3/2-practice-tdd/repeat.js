function repeat(str, count) {
  if (count < 0 || count === undefined || typeof count !== "number") {
    return "Error : count must be a positive integer";
  }
  if (count === 0) {
    return "";
  }
  return str.repeat(count);
}

module.exports = repeat;
