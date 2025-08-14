function isProperFraction(numerator, denominator) {
    if (numerator === 0 && denominator === 0) return "put numbers above and below";
    //else if (numerator === 0) return "input non-zero above";  -- not needed as numerator can be zero
    else if (denominator === 0) return "input non-zero below";
    else if (numerator < denominator) return true;
    else if (numerator > denominator) return false;
    else if (numerator === denominator) return false;
    //else if (numerator === 0 && denominator === 0) return "put numbers above and below";
    // the above line of code did not work here it had to go to the top as it is a most specific case considering our function.
}

module.exports = isProperFraction;