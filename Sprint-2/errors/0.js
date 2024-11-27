// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Function to capitalize the first letter of the string
function capitalise(str) {
  // Problem: We can't redeclare 'str' inside the function as it's already a parameter
  // Fix: Instead of redeclaring, we just modify the existing 'str' variable directly.

  // let str = `${str[0].toUpperCase()}${str.slice(1)}  // we should remove the Let 

  str = `${str[0].toUpperCase()}${str.slice(1)}`; 
   // Capitalize the first letter and combine with the rest of the string
  
  return str;  // Return the modified string
}

console.log(capitalise("coding"));  // Expected Output: "Coding"