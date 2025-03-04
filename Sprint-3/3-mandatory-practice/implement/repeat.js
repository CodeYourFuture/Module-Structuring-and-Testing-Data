function repeat(str, count) {
    if (typeof str !== "string") {
        throw new Error("The first argument must be a string");
    }
    if (typeof count !== "number" || !Number.isInteger(count)) {
        throw new Error("The second argument must be an integer number");
    }
    if (count < 0) {
        throw new Error("The repetition count cannot be negative");
    }
    
    return str.repeat(count);
}

module.exports = repeat;
