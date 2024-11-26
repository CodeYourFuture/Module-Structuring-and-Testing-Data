function capitalise(str) {
  // The function now directly modifies the 'str' variable without redeclaring it
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Example call:
console.log(capitalise("hello"));  // Output: "Hello"
