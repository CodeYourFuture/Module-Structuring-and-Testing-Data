function repeat(str, count) {
    // This function is designed to repeat a given string a specified number of times.
    if (count < 0) {
        return "invalid count, should be a positive number";
    } else if (count === 0) {
        return "";
    } else {
        let repeatedStr = "";
        for (let i = 0; i < count; i++) {
            repeatedStr += str;
        }
        return repeatedStr;
    }
    
}

module.exports = repeat;