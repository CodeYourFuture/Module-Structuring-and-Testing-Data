function repeat(str, count) {
  if (count < 0) {
    console.log("Negative counts are not valid");
    return "Error";
  }
  let repeatedStr = "";
  for (let i = 0; i < count; i = i + 1) {
    repeatedStr = repeatedStr + str;
  }
  return repeatedStr;
}

module.exports = repeat;
