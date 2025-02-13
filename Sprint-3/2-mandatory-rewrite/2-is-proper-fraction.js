function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    else if (numerator > denominator) return false; // Improper Fraction check
    else if (numerator<0 && denominator>numerator) return true;// Negative Fraction check
    else if (numerator===denominator) return false;//equalFraction
    //down here are part of the Stretch goals
    else if (numerator === 0 ) return true; //Proper fraction
    else if (denominator === 0) return false; //Invalid input
    else if (numerator < 0 && denominator < 0 && numerator > denominator) return true; //Negative cancellation
}

module.exports = isProperFraction;