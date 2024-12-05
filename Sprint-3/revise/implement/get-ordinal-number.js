
function getOrdinalNumber(num) {
    // If the number is 0 or negative, return it as-is (no ordinal suffix).
    if (num <= 0) return `${num}`;

    // Define the suffixes for ordinal numbers.
    const suffixes = ["th", "st", "nd", "rd"];  // Array holding ordinal suffixes for numbers

    // Extract the last two digits to handle special cases (e.g., 11th, 12th, 13th).
    const value = num % 100;

    // For numbers ending in 11, 12, or 13, the suffix is always "th" regardless of the last digit.
    // This is because these numbers are exceptions to the general rule for ordinal suffixes.
    if (value >= 11 && value <= 13) {
        return `${num}th`;
    }

    // This expression determines the correct suffix for the number 'num' based on its last digit.
    // 1. `value % 10` gets the last digit of the number.
    // 2. `suffixes[value % 10]` tries to access the appropriate suffix in the array.
    //    - For example, if `value % 10` is 1, it selects "st" from the array.
    //    - If `value % 10` is 5, there’s no corresponding index in the array, so it returns `undefined`.
    // 3. `|| suffixes[0]` ensures that if the result is `undefined`, the default "th" is used.
    //    - This handles cases where the last digit is outside the array bounds, like 5, 6, etc.
    // For all other numbers, apply the usual rule to add the correct suffix.
    // This handles cases like 1st, 2nd, 3rd, etc.
    return `${num}${suffixes[value % 10] || suffixes[0]}`; // Concatenate the number with the correct suffix
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
console.log(getOrdinalNumber(15));

module.exports = getOrdinalNumber;