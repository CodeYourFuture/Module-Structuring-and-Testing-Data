function repeat(str,count) {
    if (count<0) {
        return "not valid"
    }
    return `${str.repeat(count)}`;
}




module.exports = repeat;