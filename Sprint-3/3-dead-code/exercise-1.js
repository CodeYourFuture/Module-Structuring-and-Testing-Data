// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

const testName = "Aman";
const greeting = "hello";

const greetingMessage = sayHello(greeting, testName);
console.log(greetingMessage); // 'hello, Aman!'


// adding comment in exercise 1