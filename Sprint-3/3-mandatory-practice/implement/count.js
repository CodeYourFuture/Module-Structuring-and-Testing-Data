function countChar(str, char) {
    if (str.includes(char) === true) {
        return str.split(char).length -1;
    } else {
        return 0;
    }
    
}

module.exports = countChar;