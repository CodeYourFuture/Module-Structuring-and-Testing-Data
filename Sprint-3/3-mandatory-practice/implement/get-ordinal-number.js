function getOrdinalNumber(num) {
    if (num < 0) return "Invalid input";                 // Reject negative inputs early because ("-10th", "-3rd") do not follow ordinal number logic

    if (num === 0) return "0th";                         // Handle zero as a special case- rarely used but is a valid ordinal number in programming when referencing first item in an array ("zeroth element") 

    const lastTwoDigits = num % 100;                     // Extract last 2 digits to correctly label special cases like 11, 12, and 13
    const endsIn = num % 10;                             // Using modulo to isolate last number and evaluate correct suffix  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return num + "th";
    }

    if (endsIn === 1) return num + "st";
    if (endsIn === 2) return num + "nd";
    if (endsIn === 3) return num + "rd";

    return num + "th";                                    // All other numbers
}

module.exports = getOrdinalNumber;
