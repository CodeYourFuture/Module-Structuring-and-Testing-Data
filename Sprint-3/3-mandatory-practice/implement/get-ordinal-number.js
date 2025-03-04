function getOrdinalNumber(num) {
    
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }

   
    const lastDigit = num % 10;

    
    switch (lastDigit) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
        default:
            return num + "th";
    }
}

module.exports = getOrdinalNumber;
