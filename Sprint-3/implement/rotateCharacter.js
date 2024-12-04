// this one feels tricky so the code is simple and easy to understand. i will research a better way for v2 but following my initial breakdown and using the ternary is the best i can do for v1

function rotateCharacter(char, shift) {
    // If !=  letter, return the char as is
    if (!/[a-zA-Z]/.test(char)) {
        return char;
    }

    // uppercase or lowercase?
    const isUpperCase = char === char.toUpperCase();
    
    // Sets starting point of the alphabet
    const alphabet = isUpperCase //refactored cause extra var not necessary
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
        : 'abcdefghijklmnopqrstuvwxyz';
    
    // Find index of the char in the alphabet
    const currentIndex = alphabet.indexOf(char);
    
    // Calculate the new index 
    const newIndex = (currentIndex + shift + 26) % 26;
    
    return alphabet[newIndex];
}

module.exports = rotateCharacter;