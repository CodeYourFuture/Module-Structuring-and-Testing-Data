function repeatStr(str, count) {
  if (count >= 0) {
    return str.repeat(count)
  }
  else {
    throw new Error("Error")
  }
}

module.exports = repeatStr;
