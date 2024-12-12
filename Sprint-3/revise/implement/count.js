function countChar(str, char) {
  return str.split("").filter((letter) => letter === char).length;
}

module.exports = countChar;


console.log(countChar("React is better than Angular", "u"))