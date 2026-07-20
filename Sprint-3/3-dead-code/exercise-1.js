let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'
