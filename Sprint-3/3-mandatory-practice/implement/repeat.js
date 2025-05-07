function repeat(str, count) {
    if (count < 0) {
        throw new Error("Count can't be negative");
    }
    return str.repeat(count);
}


module.exports = repeat;