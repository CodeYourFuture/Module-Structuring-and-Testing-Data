function repeat(str,count) {
    if (count < 0) 
    return "negative counts invalid";
    else if (count === 0) return "";
    else if (count === 1) return str;
    else if (count > 1) {
    let repeated = str.repeat(count)    
    return repeated;
    }   
}

module.exports = repeat;