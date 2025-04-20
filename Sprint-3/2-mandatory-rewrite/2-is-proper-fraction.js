function isProperFraction(numerator, denominator) {
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    if (denominator === 0) return false; 
    if (numerator === denominator) return false; 
    if (numerator < denominator) return true; 
    return false;
};

module.exports = isProperFraction;

console.log(isProperFraction(2, 3)); // true
console.log(isProperFraction(5,2)); // false
console.log(isProperFraction(-4,7)); // true 
console.log(isProperFraction(3,3)); // false 
console.log(isProperFraction(3,0)); // false

console.log(isProperFraction(3, -4)); // true
console.log(isProperFraction(-3, -4)); // true
console.log(isProperFraction(-5, -4)); // false