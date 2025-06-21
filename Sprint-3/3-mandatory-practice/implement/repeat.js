function repeat(str, count) {
    if (count < 0) return "Invalid input";
    return str.repeat(count);
}

module.exports = repeat;