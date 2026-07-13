// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  //const greetingStr = greeting + ", " + name + "!"; 
  //  - removing this line as this is redundant code and duplicated inside the return 
  return `${greeting}, ${name}!`;
  //console.log(greetingStr); 
  // - removing this line because after return the console.log will not execute
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'
