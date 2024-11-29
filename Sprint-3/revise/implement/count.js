
function countChar(str, char) {

    // Validate inputs: str must be a string, char must be a single character
    if (typeof str !== "string" || typeof char !== "string" || char.length !== 1) {
        throw new Error("Invalid input. Ensure 'str' is a string and 'char' is a single character.");
    }

    let count = 0; // Initialize counter

    // Loop through the string and count matching characters
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++; // Increment counter if a match is found
        }
    }
    return count; // Return the total count   
}



// Test cases
console.log(countChar("aaaaa", "a")); // Output: 5
console.log(countChar("hello", "z")); // Output: 0
console.log(countChar("AaAaA", "a")); // Output: 2

try {
    console.log(countChar("hello", ""));
    console.log(countChar(123, "o")); 
} catch (e) {
    console.log(e.message); 
}

try {
    console.log(countChar(123, "o")); 
} catch (e) {
    console.log(e.message); 
}


module.exports = countChar;