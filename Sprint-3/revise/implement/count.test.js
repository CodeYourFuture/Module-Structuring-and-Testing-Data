function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Testing the function
console.log(countChar("aaaaa", "a")); // Scenario: Multiple Occurrences, Output: 5
console.log(countChar("hello world", "z")); // Scenario: No Occurrences, Output: 0

