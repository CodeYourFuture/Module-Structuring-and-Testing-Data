function isProperFraction(numerator, denominator) {
    if (numerator < denominator) {
        return true;
    } else {
        console.assert(
            'Expected numerator to be less than denominator'
        );
        return false;
    }

}

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}


module.exports = isProperFraction;

Test

