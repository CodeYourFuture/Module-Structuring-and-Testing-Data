
function getOrdinalNumber(num) {
    // If the number is 0 or negative, return it as-is (no ordinal suffix).
    if (num <= 0) return `${num}`;

    // Define the suffixes for ordinal numbers.
    const suffixes = ["th", "st", "nd", "rd"];

    // Extract the last two digits to handle special cases (e.g., 11th, 12th, 13th).
    const value = num % 100;

    // For numbers like 11, 12, 13, we return "th" directly to handle the special cases.
    if (value >= 11 && value <= 13) {
        return `${num}th`;
    }

    // For all other numbers, apply the usual rule to add the correct suffix.
    // This handles cases like 1st, 2nd, 3rd, etc.
    return `${num}${suffixes[value % 10] || suffixes[0]}`;
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
console.log(getOrdinalNumber(42));

module.exports = getOrdinalNumber;