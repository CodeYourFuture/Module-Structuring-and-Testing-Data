
let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

testName = "Khaliun";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); 
