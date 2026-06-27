## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
console.log + Enter: You will see something like ƒ log() { [native code] }.
Now enter just `console` in the Console, what output do you get back?
console + Enter: You will see an expandable drop-down list displaying a massive list of built-in features like clear, error, info, log, warn, etc.
Try also entering `typeof console`
typeof console + Enter: The console will return the string "object".
Answer the following questions:

What does `console` store?
The console object stores a collection of properties and methods (functions) that allow you to interact with the browser's debugging console. Instead of storing just a single value (like a number or string), it acts as a container for tools that let you log text, display errors, format data into tables, and run assertions.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The . (Dot): This is known as the dot notation operator. In JavaScript, it is used to access the properties or methods stored inside an object. You can think of it like an address or a path: Object.Property.

The Syntax: * console.log means: "Go to the console object, and find the log method inside it."

console.assert means: "Go to the console object, and find the assert method inside it."

Analogy: Think of console as a literal toolbox, and the dot (.) as the act of reaching inside it. console.log means you are reaching into the console toolbox to grab the log tool.
