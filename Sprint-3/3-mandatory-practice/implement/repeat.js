function repeat(str, count) {
     // Case: handle negative count
     if (count < 0) {
        throw new Error("Count must be a non-negative integer.");
    }
    
    // Case: handle count of 0
    if (count === 0) {
        return "";
    }
    
    // Case: repeat the string count times
    let repeatedStr = '';
    for (let i = 0; i < count; i++) {
        repeatedStr += str;
    }
    
    return repeatedStr;
}

module.exports = repeat;