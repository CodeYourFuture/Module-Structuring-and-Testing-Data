function repeat(str, rep) {
  myStr = "";
  for (let i = 0; i < rep; i++) {
    myStr = myStr + str;
  }
  if (rep < 0) return "negative counts are not valid";
  return myStr;
}

module.exports = repeat;
