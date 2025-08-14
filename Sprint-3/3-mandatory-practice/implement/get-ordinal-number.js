function getOrdinalNumber(num) {
if (num === 11 || num ===12 || num ===13) return num + "th";
const lastDigit = num % 10;
if (lastDigit === 1) return num + "st";
else if (lastDigit === 2) return num + "nd";
else if (lastDigit === 3) return num + "rd";
else return num + "th";
}





module.exports = getOrdinalNumber;