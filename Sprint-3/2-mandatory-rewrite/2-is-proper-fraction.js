function isProperFraction(numerator, denominator) {
    if (denominator === 0) return false;
    else if (numerator < denominator && numerator > 0) return true;
    // add your completed function from key-implement here
    else if (numerator > denominator) return false;
    else if (numerator < 0) return true;
    else if (numerator === denominator) return false;
    else return "error";
}

module.exports = isProperFraction;