function isProperFraction(numerator, denominator) {
    if (numerator === 0 && denominator === 0) return "put numbers above and below";
    else if (numerator < denominator && numerator !== 0) return true;
    else if (numerator > denominator && denominator !== 0) return false;
    else if (numerator === denominator) return false;
    else if (numerator === 0) return "input non-zero above";
    else if (denominator === 0) return "input non-zero below";
}

module.exports = isProperFraction;