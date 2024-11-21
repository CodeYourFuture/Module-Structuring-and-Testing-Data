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
//---------------------------------------------------------------------------------------------------

//// Converts a number into its English word representation
function numberToWords(num) {
  // Handle edge case for zero
  if (num === 0) return "zero ";

  // Arrays for number words below 20, tens, and large units
  const belowTwenty = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const thousands = ["", "thousand", "million", "billion"];

  // Helper function to convert numbers below 1000 into words
  function helper(n) {
    if (n === 0) return "";
    else if (n < 20) return belowTwenty[n - 1];
    else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
    else
      return (
        belowTwenty[Math.floor(n / 100) - 1] + " hundred " + helper(n % 100)
      );
  }

  let result = "";
  let i = 0;
  // Process the number in groups of 1000
  while (num > 0) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + " " + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result; // Return the final word representation
}

// Count occurrences of a character in a string and output the result in words
function countChar(string, str) {
  const stringCount = {}; // Object to store character counts
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === str) {
      stringCount[char] = (stringCount[char] || 0) + 1;
    }
  }
  // If str doesn't exist in stringCount, set the count to 0
  const count = stringCount[str] || 0;
  if (count) {
    // Return the result with the count converted to words
    return `"${str}" appears ${numberToWords(count)}times in "${string}"`;
  } else {
    return `No ccurrences of the "${str}" were found in the "${string}".`;
  }
}

console.log(countChar("codeyourfuture", "e")); //Output: "e" appears two  times in "codeyourfuture"
console.log(countChar("Sanandaj", "w")); //Output: No ccurrences of the "w" were found in the "Sanandaj".
console.log(countChar("united states of america", "i")); //Output: "i" appears two  times in "united states of america"
console.log(countChar("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "a")); //Output: "a" appears thirty seven  times in "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
