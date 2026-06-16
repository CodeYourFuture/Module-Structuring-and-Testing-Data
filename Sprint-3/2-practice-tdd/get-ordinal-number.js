function getOrdinalNumber(num) {
    const asString = String(num);

    if (num === 0) {
        return "0";
    } else if (
        asString.endsWith("11") ||
        asString.endsWith("12") ||
        asString.endsWith("13")
    ) {
        return asString + "th";
    } else if (asString.endsWith("1")) {
        return asString + "st";
    } else if (asString.endsWith("2")) {
        return asString + "nd";
    } else if (asString.endsWith("3")) {
        return asString + "rd";
    } else {
        return asString + "th";
    }
}

module.exports = getOrdinalNumber;
