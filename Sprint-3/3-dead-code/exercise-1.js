// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

let testName = "Jerry";
const greeting = "hello";

function sayHello(greeting, name) {
  // const greetingStr = greeting + ", " + name + "!"; this line will also be removed because the we're trying to return something else, not the greetingStr and apparently it is a redundant code
  return `${greeting}, ${name}!`;
  // console.log(greetingStr); this line will obviously be omitted as it is unreachable code because it is written after return. In fact, anything after return is not reachable and should be get rid of
}

const greetingMessage = sayHello(greeting, testName);
console.log(greetingMessage);
