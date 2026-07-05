function toUpperSnakeCase(str) {
  return str.replaceAll(" ", "_").toUpperCase();
}

console.log(toUpperSnakeCase("hello there"));       // "HELLO_THERE"
console.log(toUpperSnakeCase("lord of the rings")); // "LORD_OF_THE_RINGS"
