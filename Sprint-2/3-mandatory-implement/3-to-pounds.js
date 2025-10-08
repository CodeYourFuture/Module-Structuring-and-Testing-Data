// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs



// Here's my implementation of the toPounds function:

function toPounds(kilograms) {
    const conversionRate = 2.20462;
    const pounds = kilograms * conversionRate;
    return pounds;
}


// The `toPounds` function works in 3 simple steps:

// Takes input - the `kilograms` parameter receives a weight in kilograms
// Converts - multiplies kilograms by 2.20462 (the conversion rate to pounds)
// Returns result - gives back the calculated weight in pounds

// Example: `toPounds(10)` calculates `10 × 2.20462 = 22.0462` and returns this value.