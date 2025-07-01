function repeat() {
    return "hellohellohello";
}

module.exports = repeat;

function repeat(word = "hello", times = 3) {
    return word.repeat(times);
}

module.exports = repeat;
