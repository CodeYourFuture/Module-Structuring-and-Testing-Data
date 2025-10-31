function repeat(myString, repeatNumber) {
  if (repeatNumber < 0) return "Invalid Input must be a positive number";
  let str = "";
  for (let i = 0; i < repeatNumber; i++) {
    str += myString;
  }
  return str;
}

module.exports = repeat;
