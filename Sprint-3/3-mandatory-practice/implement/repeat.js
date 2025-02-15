function repeat() {
    return "hellohellohello";
}

module.exports = repeat;

function repeat(str, num) {
    // Handle edge cases
    if (num <= 0) return '';
    return str.repeat(num);
}

module.exports = repeat;
