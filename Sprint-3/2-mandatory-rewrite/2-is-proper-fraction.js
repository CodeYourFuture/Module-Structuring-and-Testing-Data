function isProperFraction(numerator, denominator) {
    if (numerator < denominator && (numerator/denominator) > 0) return true;
    if (numerator > denominator) return false;
    if (numerator < denominator && (numerator/denominator) < 0) return "Negative Fraction";
    if (numerator === denominator ) return "Not really a fraction";
    
}

module.exports = isProperFraction;