function repeatStr(str, count) {
  if (count < 0)
    throw new Error("Negative counts are not valid");
  if (count === 0) return "";
  else return str.repeat(count);
}

module.exports = repeatStr;
