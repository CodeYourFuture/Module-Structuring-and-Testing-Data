// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

let testName; // = "Jerry"; -> we can initialize the variable without giving it a value because the testName is being reassigned later in the code. The value "Jerry" never appears in a function call.
const greeting = "hello";

function sayHello(greeting, name) {
  // const greetingStr = greeting + ", " + name + "!";  -> this line is not necessary because the returned string accomplishes the same thing, and the greetingStr is never being used. So it is redundant code and can be removed.
  return `${greeting}, ${name}!`;
  // console.log(greetingStr);  -> this line is never being executed because it comes after the return statement, so it never runs and can be removed.
}

testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'
