// here is my 1st attempt a the solution:
/*
function isProperFraction(numerator, denominator) {
    if (numerator < denominator) {
        return true;
    } else {
        return false;
    }
}
*/
// lets call this one v2 of the function
function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    
    if (Math.abs(numerator) < Math.abs(denominator)) { // v2 fails a test here. it should consider the absolute value of the numerator and denominator and so i changed it but lets get the syntax right.
        return true;
    } else {
        return false;
    }
}

module.exports = isProperFraction;