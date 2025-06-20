function getOrdinalNumber(num) {
    const endsIn = num % 10; // Using modulo operator to isolate last number as remainder in order to evaluate correct suffix  
    const lastTwoDigits = num % 100; // Extract last 2 digits to ensure special cases are correctly labelled

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th"; // Applying ordinal number logic for special cases: 11th, 12th, 13th.
    }
    if (num < 0) return "Invalid input"; // Reject negative numbers because ("-10th", "-3rd") do not necessarily follow ordinal number logic nor grammatically standard.
    if (num === 0) return "0th"; // Handle zero as a special case - although rarely used, "0th" is a valid ordinal number in programming in reference to indexing because the "zeroth element" is the first item in an array.
    if (endsIn === 1) return num + "st";
    if (endsIn === 2) return num + "nd";
    if (endsIn === 3) return num + "rd"; 
    
    return num + "th"; // All other numbers without exceptions.
}

module.exports = getOrdinalNumber; 



  
