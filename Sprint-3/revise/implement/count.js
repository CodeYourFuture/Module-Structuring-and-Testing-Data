function countChar(str, char) {

    //function will take a string and character
    //will count the number of occurences of the character using a for loop
    let count = 0;


    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1;
        }

    }


    return count;
}

module.exports = countChar;