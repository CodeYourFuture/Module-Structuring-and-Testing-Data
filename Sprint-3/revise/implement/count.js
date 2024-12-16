function countChar(str, char) {
  return str.split("").filter((letter) => letter === char).length;
}

module.exports = countChar;
