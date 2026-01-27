function repeatStr(str, count) {
  if (count < 0) throw new Error("Can not repeat negative times.");
  return str.repeat(count);
}

module.exports = repeatStr;
