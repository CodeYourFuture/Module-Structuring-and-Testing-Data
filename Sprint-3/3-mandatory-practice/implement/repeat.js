
function repeat(str, count) {
    if (typeof count !== "number" || count < 0) {
        throw new Error("Count must be a non-negative number");
    }

    return str.repeat(count);
}
module.exports = repeat;