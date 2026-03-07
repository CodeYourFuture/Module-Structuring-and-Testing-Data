function repeatStr() {
  return "hellohellohello";
}

module.exports = repeatStr;
// Below is the implementation of the repeatStr function that takes a string and a number as parameters and returns the string repeated the specified number of times.
// The function uses the built-in `repeat` method of strings to achieve this. It takes the input string and repeats it `n` times, where `n` is the number provided as the second parameter.

function repeatStr(str, n) {
  return str.repeat(n);
}

module.exports = repeatStr;
