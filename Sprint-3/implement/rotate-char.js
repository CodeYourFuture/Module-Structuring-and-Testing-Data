function rotateCharacter(char, shift) {
    // Check if the character is a lowercase letter
    if (char >= 'a' && char <= 'z') {
        const base = 'a'.charCodeAt(0); // ASCII value of 'a'
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }
    
    // Check if the character is an uppercase letter
    if (char >= 'A' && char <= 'Z') {
        const base = 'A'.charCodeAt(0); // ASCII value of 'A'
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }

    // Non-letter characters are returned unchanged
    return char;
}

// Test Cases
console.log(rotateCharacter("a", 3)); // Output: "d" (lowercase rotation)
console.log(rotateCharacter("f", 1)); // Output: "g" (lowercase rotation)
console.log(rotateCharacter("A", 3)); // Output: "D" (uppercase rotation)
console.log(rotateCharacter("F", 1)); // Output: "G" (uppercase rotation)
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)
console.log(rotateCharacter("z", 1)); // Output: "a" (wraparound for lowercase)
console.log(rotateCharacter("Y", 2)); // Output: "A" (wraparound for uppercase)
console.log(rotateCharacter("!", 3)); // Output: "!" (non-letter remains unchanged)
console.log(rotateCharacter("z", 27)); // Output: "a" (wraparound with larger shift)
console.log(rotateCharacter("Z", 27)); // Output: "A" (wraparound with larger shift)

