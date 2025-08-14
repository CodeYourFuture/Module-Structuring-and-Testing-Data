function repeat(str, count) {
    if (count < 0) {
        throw new Error("count must be a positive integer");
    }
    // return str * count; numbers and strings dont mix.
    return str.repeat(count);
}

module.exports = repeat;