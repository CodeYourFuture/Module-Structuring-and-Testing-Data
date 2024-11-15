// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// This function takes a number and returns its ordinal representation (e.g., 1 -> 1st, 2 -> 2nd)
function getOrdinalNumber(number) {
    // Check if the number is 1, return '1st'
    if (number === 1) return '1st';  // First number
    // Check if the number is 2, return '2nd'
    if (number === 2) return '2nd';  // Second number
    // Check if the number is 3, return '3rd'
    if (number === 3) return '3rd';  // Third number
    // For all other numbers, add 'th' at the end
    return number + 'th';  // For other numbers like 4, 5, etc., append 'th'
}

// Example usage
console.log(getOrdinalNumber(1));  // Output: 1st
console.log(getOrdinalNumber(2));  // Output: 2nd
console.log(getOrdinalNumber(3));  // Output: 3rd
console.log(getOrdinalNumber(11)); // Output: 11th


// Test cases for the getOrdinalNumber function

// Test 1: Check if the function returns "1st" for the number 1
console.log(getOrdinalNumber(1));  // Expected output: "1st"

// Test 2: Check if the function returns "2nd" for the number 2
console.log(getOrdinalNumber(2));  // Expected output: "2nd"

// Test 3: Check if the function returns "3rd" for the number 3
console.log(getOrdinalNumber(3));  // Expected output: "3rd"

// Test 4: Check if the function returns "11th" for the number 11
console.log(getOrdinalNumber(11)); // Expected output: "11th"

// Test 5: Check if the function returns "21st" for the number 21
console.log(getOrdinalNumber(21)); // Expected output: "21st"

// Test 6: Check if the function returns "22nd" for the number 22
console.log(getOrdinalNumber(22)); // Expected output: "22nd"

// Test 7: Check if the function returns "23rd" for the number 23
console.log(getOrdinalNumber(23)); // Expected output: "23rd"

// Test 8: Check if the function returns "100th" for the number 100
console.log(getOrdinalNumber(100)); // Expected output: "100th"