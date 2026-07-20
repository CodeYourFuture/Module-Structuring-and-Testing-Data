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

//I have removed "const greetingStr = greeting + ", " + name + "!";" because it serves the same purpose as "return `${greeting}, ${name}!`;",
//making it redundant.

//Also, "console.log(greetingStr);" comes after  "return `${greeting}, ${name}!`;", making it unreachable inside the function, since eveything
//after "return" is ignored.


let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

testName = "Khaliun";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // "hello, Khaliun!"
