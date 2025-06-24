function isProperFraction(numerator, denominator) {
    // A proper fraction is when absolute numerator is less than absolute denominator
    if (typeof numerator !== "number" || typeof denominator !== "number" || denominator === 0) {
        throw new Error("Invalid input");
    }

    return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;