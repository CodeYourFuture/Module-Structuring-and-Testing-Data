// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

const greeting = "hello";
function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

// Avoid polluting the global scope by keeping example data local
function demo() {
  const testName = "Aman"; // local variable
  const greetingMessage = sayHello(greeting, testName);
  console.log(greetingMessage); // 'hello, Aman!'
}

demo();
