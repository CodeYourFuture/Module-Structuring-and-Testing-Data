function repeat(str,count) {
    if(count < 0 ) throw new Error ("Negative counts are not valid");
    if(count === 0) return "";
    if(count === 1) return str;
    return str.repeat(count);
}

module.exports = repeat;