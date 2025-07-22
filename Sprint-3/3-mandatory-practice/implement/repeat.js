function repeat(word, times) {

    if (times == 0) {
        return "";
    }

    if (times == 1) {
    return word;
    }

    if (times < 0) {
           return "Invalid count: Count must be a non-negative integer.";
    }
    
    else return word.repeat(times);
    // The repeat method is used to repeat the string 'words' 'times' times.
    // If times is less than or equal to 1, it returns the original string.
    // Otherwise, it returns the string repeated 'times' times. 
    
}

module.exports = repeat;