// add your completed function from key-implement here

function isProperFraction(numerator, denominator) {
    if (denominator === 0 || numerator === 0) return false;   // Check for invalid inputs: a proper fraction must have non-zero numerator and denominator
                                                              // Denominator of 0 is undefined and numerator of 0 is not considered proper
    return Math.abs(numerator) < Math.abs(denominator);       // Using Math.abs because absolute value of the numerator must be less than the absolute value of the denominator
}

module.exports = isProperFraction;

/*
console.log(isProperFraction(2, -3));   
console.log(isProperFraction(-2, 3));   
console.log(isProperFraction(-2, -3));  
console.log(isProperFraction(3, 2));    
console.log(isProperFraction(0, 5));    
console.log(isProperFraction(5, 0));    
*/
