function repeat(str, count) {
    if (count < 0) {
        throw new Error("Negative integer not accepted.");
    }
    return str.repeat(count);
}

module.exports = repeat;