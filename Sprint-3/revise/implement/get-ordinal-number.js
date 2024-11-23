function getOrdinalNumber(num) {
    const suffixes = ["th", "st", "nd", "rd"];
    
    // Handle special cases for 11th, 12th, 13th
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    
    // Determine the correct suffix based on the last digit
    const lastDigit = num % 10;
    const suffix = suffixes[lastDigit] || suffixes[0]; // Default to "th" if not 1, 2, or 3
    
    return num + suffix;
}

module.exports = getOrdinalNumber;
