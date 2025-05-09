//function countChar(stringOfCharacters, findCharacter) {
  //  return 5
//}

function countChar( str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
           count++;
        }
    } return count;
    };



// line 6 const gave an error so its value could not be changed, had to use let variable



module.exports = countChar;