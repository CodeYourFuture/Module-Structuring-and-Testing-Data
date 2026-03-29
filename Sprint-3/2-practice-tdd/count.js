function countChar(str, char) {
  
  return str.split(char).length -1; 
}

console.log(countChar('lol', 'l'));

module.exports = countChar;