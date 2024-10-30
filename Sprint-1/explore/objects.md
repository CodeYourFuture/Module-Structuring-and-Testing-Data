## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? //The output will show the function definition of console.log, something like:ƒ log() { [native code] }
This means console.log is a function defined in the JavaScript environment of the browser. It’s a built-in function used for outputting messages to the console.

Now enter just `console` in the Console, what output do you get back?//the Console will display an object that contains a variety of properties and methods. something similar to this: Console { log: ƒ, warn: ƒ, error: ƒ, assert: ƒ, clear: ƒ, … }
This object shows that console is a predefined object in JavaScript, with various methods like log, warn, error, assert, and more.

Try also entering `typeof console`

Answer the following questions://The output will be:"object"This output confirms that console is an object in JavaScript. It is an object that stores multiple functions for debugging and logging information to the Console.

What does `console` store?
//The console object stores various methods (functions) and properties that allow developers to interact with the Console. Common methods include:
console.log() - for logging messages to the console
console.warn() - for warnings
console.error() - for errors
console.assert() - for conditional logging
console.clear() - to clear the Console
Essentially, console is a collection of tools that help developers track, debug, and display information while running JavaScript.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//The . is the dot notation in JavaScript. It’s used to access properties or methods of an object.
When we write console.log, it means we are accessing the log method (or function) within the console object.
Similarly, console.assert refers to the assert method of the console object.
Dot notation is a standard way in JavaScript to navigate through an object’s properties or methods.
