function find(str, char) {
  let index = 0;

  while (index < str.length) {  // (d) This checks if we've reached the end of the string.
    if (str[index] === char) {  // (b) The if statement checks if the character at the current index matches the target character.
      return index;  // If match found, return the index.
    }
    index++;  // (c) index++ increments the index variable to check the next character.
  }
  return -1;  // If the character is not found, return -1.
}

console.log(find("code your future", "u"));  // Expected output: 7
console.log(find("code your future", "z"));  // Expected output: -1
