function getOrdinalNumber(num) {
    if (num === 1) return "1st";
    if (num === 2) return "2nd";
    if (num === 3) return "3rd";
    if (num >= 4 && num <= 20) return num + "th";
    
    const lastDigit = num % 10;
    if (lastDigit === 1) return num + "st";
    if (lastDigit === 2) return num + "nd";
    if (lastDigit === 3) return num + "rd";
    
    return num + "th";
}

module.exports = getOrdinalNumber;
