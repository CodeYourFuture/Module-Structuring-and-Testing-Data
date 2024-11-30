// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run  your tests often for continual feedback

/**
 * Function to get the ordinal representation of a number.
 * @param {number} num - The input number.
 * @returns {string} The number with its ordinal suffix.
 */
function getOrdinalNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }

    const lastDigit = num % 10; // Get the last digit
    const lastTwoDigits = num % 100; // Get the last two digits

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${num}th`; // Special case for 11, 12, 13
    }

    switch (lastDigit) {
        case 1:
            return `${num}st`;
        case 2:
            return `${num}nd`;
        case 3:
            return `${num}rd`;
        default:
            return `${num}th`;
    }
}

// Example Usage
console.log(getOrdinalNumber(1));  // Output: "1st"
console.log(getOrdinalNumber(2));  // Output: "2nd"
console.log(getOrdinalNumber(3));  // Output: "3rd"
console.log(getOrdinalNumber(4));  // Output: "4th"
console.log(getOrdinalNumber(11)); // Output: "11th"
console.log(getOrdinalNumber(21)); // Output: "21st"
console.log(getOrdinalNumber(112)); // Output: "112th"

