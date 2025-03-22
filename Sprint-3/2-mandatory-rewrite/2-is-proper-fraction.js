function isProperFraction(numerator, denominator) {
    // if (denominator === 0) return false;
    // if (numerator < denominator && numerator > 0) return true;
    // // add your completed function from key-implement here
    // if (numerator < 0 ) return true;
    // if (numerator > denominator ) return false;
    // if (numerator === denominator) return false;
    // else return "error";
    if (denominator === 0) return false;
    if (numerator == denominator) return false
    if (numerator < 0 && denominator < 0 && denominator < numerator) return true;
    // if (numerator < 0 && denominator < 0 && denominator > numerator) return false;
    if (numerator > 0 && denominator > 0 && numerator > denominator) return false;
    if (numerator > 0 && denominator > 0 && numerator < denominator) return true;
    if (numerator < 0 && denominator > 0) return true;
    if (numerator > 0 && denominator < 0) return true;
    else return "error";
};

module.exports = isProperFraction;

console.log(isProperFraction(2, 3)); // true
console.log(isProperFraction(5,2)); // false
console.log(isProperFraction(-4,7)); // true 
console.log(isProperFraction(3,3)); // false 
console.log(isProperFraction(3,0)); // false

console.log(isProperFraction(3, -4)); // true
console.log(isProperFraction(-3, -4)); // true