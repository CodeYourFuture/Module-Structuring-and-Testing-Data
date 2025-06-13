function repeat(str, count) {
    if (count < 0) return "Count must be a non-negative integer";
    return str.repeat(count);
}

module.exports = repeat;
