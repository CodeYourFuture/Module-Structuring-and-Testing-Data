// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  const greetingStr = greeting + ", " + name + "!";
  return `${greeting}, ${name}!`;
  console.log(greetingStr);
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'

// this is the correct code after removing unreachable and redundant code

const greeting = "hello";
let testName = "Aman";

function sayHello(greeting, name) {
  // Directly returns the cleanly formatted string
  return `${greeting}, ${name}!`;
}

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // Output: 'hello, Aman!'

//reasons for the changes:

// 1. Unreachable Code: The console.log(greetingStr); 
// inside the function occurs after the return statement. 
// Once a function hits a return, it immediately exits, 
// making anything below it completely unreachable.

// 2. Redundant Code: The variable const greetingStr = greeting + ", " + name + "!"; 
// was created using old string concatenation, but the function actually returns a template literal expression (${greeting}, ${name}!). 
// Since greetingStr is never used elsewhere, it can be deleted entirely.

// 3. Unused Global Variable: let testName = "Jerry"; is declared but immediately overwritten by testName = "Aman"; 
// before ever being used, making the initial assignment redundant.
