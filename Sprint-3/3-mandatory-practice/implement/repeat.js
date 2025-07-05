function repeat(str, count) {
    if (count < 0) {                                                    // Throw an error instead of returning a message when count is negative,
        throw new Error("Invalid input: Count is a negative value");    // to enable proper error handling by allow the use of .toThrow() for validation and better testability.
    }
    return str.repeat(count);
}

module.exports = repeat;