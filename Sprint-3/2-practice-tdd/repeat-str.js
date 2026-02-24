function repeatStr(str, count) {
  if (count < 0) throw new Error("Invalid format: count cannot be negative");
  return str.repeat(count);
}

module.exports = repeatStr;
