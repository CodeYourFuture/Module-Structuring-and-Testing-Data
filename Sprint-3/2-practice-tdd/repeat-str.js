function repeatStr(str, count) {
  if (count === 0) return "";
  else if (count === 1) return str;
  else if (count < 0) throw new Error("Count can't be negative");
  else return str.repeat(count);
}

module.exports = repeatStr;
