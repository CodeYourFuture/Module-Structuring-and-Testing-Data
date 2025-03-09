function isProperFraction(numerator, denominator) {
    // add your completed function from key-implement here
    if (denominator === 0) throw new Error("Denominator cannot be zero");
    return Math.abs(numerator) < Math.abs(denominator); 
}
console.log(isProperFraction(4, 3)); // false

module.exports = isProperFraction;