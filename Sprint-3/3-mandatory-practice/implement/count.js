function countChar(stringOfCharacters, findCharacter) {
   //return 5
   let count = 0;
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count++;
        }
    }
    return count;
}

console.log(countChar("hello world", "l")); 
console.log(countChar("Mississippi", "s")); 
console.log(countChar("banana", "n"));  
console.log(countChar("Hello", "h"));
console.log(countChar("hello", "H"));
console.log(countChar("", ""));

module.exports = countChar;