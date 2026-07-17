function repeatStr(str, times) {
  if (times === 0) {
    return "";
  } else if (times < 0) {
    return "error";
  }

  let repeatedString = "";
  for (let i = 0; i < times; i++) {
    repeatedString += str;
  }
  return repeatedString;
} 

module.exports = repeatStr;
