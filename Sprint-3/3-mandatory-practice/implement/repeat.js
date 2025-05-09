
function repeat(str, count) {
    if (count <= 0) {
        return ""
    }
    return str.repeat(count)
}

console.log(repeat("hello", 10));
module.exports = repeat;