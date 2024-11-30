// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.


/**
 * Function to count the occurrences of a character in a string.
 * @param {string} str - The input string.
 * @param {string} char - The character to count.
 * @returns {number} The number of occurrences of char in str.
 */
function countChar(str, char) {
    // Validate inputs
    if (typeof str !== "string" || typeof char !== "string" || char.length !== 1) {
        throw new Error("Invalid inputs: str must be a string and char must be a single character.");
    }

    // Initialize counter
    let count = 0;

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches char
        if (str[i] === char) {
            count++;
        }
    }

    // Return the final count
    return count;
}

// Example usage
console.log(countChar("aaaaa", "a")); // Output: 5
console.log(countChar("hello", "l")); // Output: 2
console.log(countChar("world", "x")); // Output: 0
