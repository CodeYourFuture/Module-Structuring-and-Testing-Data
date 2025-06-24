function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    //return denominator !== 0 && Math.abs(numerator) < Math.abs(denominator);
   if (denominator === 0) return false; // Avoid division by zero
    if (numerator === 0) return true; // Zero is considered a proper fraction
    if (numerator < 0 || denominator < 0) return false; // Negative fractions are not proper
    return Math.abs(numerator) < Math.abs(denominator);
             

}

console.log(isProperFraction(0, 1)); 

module.exports = isProperFraction;

