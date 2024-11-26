// Function to convert a string to UPPER_SNAKE_CASE
function toUpperSnakeCase(str) {
    // Step 1: Split the string into words (splitting by spaces)
    const words = str.split(" ");
    
    // Step 2: Convert each word to uppercase using map() and toUpperCase()
    const upperWords = words.map(word => word.toUpperCase());
    
    // Step 3: Join the array of uppercase words with underscores
    const result = upperWords.join("_");
    
    // Step 4: Return the result
    return result;
  }
  
  // Example usage:
  const example1 = "hello there";
  console.log(toUpperSnakeCase(example1)); // Output: "HELLO_THERE"
  
  const example2 = "lord of the rings";
  console.log(toUpperSnakeCase(example2)); // Output: "LORD_OF_THE_RINGS"