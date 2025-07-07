function repeat(str, count) {

  if (count > 1) {
    let result=""
    for (let i = 0; i <= count-1; i++) {
      result += str;
    }
    return result;
  }
  if (count == 1) return str;
  if (count == 0) return "";
  return "Negative counts are not valid.";
}

module.exports = repeat;
