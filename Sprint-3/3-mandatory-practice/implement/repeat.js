function repeat(str, rep) {
  if (rep < 0) return "negative counts are not valid"; //filter

  myStr = "";
  for (let i = 0; i < rep; i++) {
    myStr = myStr + str;
  }

  return myStr;
}

module.exports = repeat;
