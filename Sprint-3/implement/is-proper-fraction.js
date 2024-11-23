function isProperFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return Math.abs(numerator) < Math.abs(denominator);
}

// Test cases
try {
    console.assert(isProperFraction(2, 3) === true, "Test failed: 2/3 should be a proper fraction");
    console.assert(isProperFraction(5, 2) === false, "Test failed: 5/2 should be an improper fraction");

    // Test for denominator of 0
    try {
        isProperFraction(3, 0);
        console.assert(false, "Test failed: Denominator of 0 should throw an error");
    } catch (e) {
        console.assert(e.message === "Denominator cannot be zero", "Test failed: Incorrect error message for zero denominator");
    }

    console.assert(isProperFraction(-4, 7) === true, "Test failed: -4/7 should be a proper fraction");
    console.assert(isProperFraction(3, 3) === false, "Test failed: 3/3 should not be a proper fraction");

    console.log("All tests passed!");
} catch (e) {
    console.error("Test failed:", e.message);
}
