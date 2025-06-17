function getOrdinalNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
        throw new Error("Num must be a positive integer")
    }
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    lastDigit= num % 10;
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