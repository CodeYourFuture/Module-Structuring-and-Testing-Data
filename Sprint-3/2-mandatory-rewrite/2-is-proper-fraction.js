function isProperFraction(numerator, denominator) {
    if (Math.abs(numerator) < Math.abs(denominator) && numerator !=0 && denominator != 0) return true;
    else if (Math.abs(numerator) === Math.abs(denominator)) return false;
    else return false; 
}


module.exports = isProperFraction;