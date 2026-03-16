
// The sayHello function should continue to work for any reasonable input it's given.

let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'

