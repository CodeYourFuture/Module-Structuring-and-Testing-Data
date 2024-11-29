
function getOrdinalNumber(num) {
    // If the number is 0 or negative, return it as-is (no ordinal suffix).
    if (num <= 0) return `${num}`;

    // Define the suffixes for ordinal numbers.
    const suffixes = ["th", "st", "nd", "rd"];

    // Extract the last two digits to handle special cases (e.g., 11th, 12th, 13th).
    const value = num % 100;

    // Return the number with the appropriate suffix.
    // Use modulus to determine the correct suffix or fall back to "th".
    return `${num}${suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]}`;
}

console.log(getOrdinalNumber(-1));
console.log(getOrdinalNumber(100));
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(0));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(101));
console.log(getOrdinalNumber(111));


module.exports = getOrdinalNumber;