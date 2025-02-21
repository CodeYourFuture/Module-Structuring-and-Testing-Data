function isProperFraction(numerator, denominator) {
    
    if (Math.abs(numerator) < Math.abs(denominator)) {
        return true;
    }
    // add your completed function from key-implement here

    if (denominator === 0) {
        return "Undefined"; 
    }

   

    // Case 3: Improper fraction (absolute numerator >= absolute denominator)
    if (Math.abs(numerator) >= Math.abs(denominator)) {
        return false;
    }
}



module.exports = isProperFraction;