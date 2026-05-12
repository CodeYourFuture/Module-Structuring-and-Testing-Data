function repeatStr(str, count) {
  if (count < 0) {throw new Error("Invalid count");}
  let string = "";
  while (count > 0) {
    string = string + str;
    count--;
  }
  return string;
}

module.exports = repeatStr;
