## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
 **ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
 *console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
 *'object'
Answer the following questions:

What does `console` store?
 *the `console` is a special JavaScript object that stores various logging methods used for debugging and interaction within the browser's Developer Tools. The `console` object allows you to print messages, track data, measure performance, and even interact with JavaScript running on the page.

What does the syntax `console.log` or `console.assert` mean?
 *`console.log()`: This method outputs a message to the console. It's commonly used to display variables, messages, and data, helping developers check if parts of the code work as expected.
 *`console.assert()`: This method tests if a condition is false. If the condition is false, it logs an error message to the console. If true, it does nothing.

In particular, what does the `.` mean?
 *The dot `.` in `console.log` or `console.assert` is the property access operator. It accesses specific methods (like log or assert) within the console object. Here, console is the main object, and methods like log and assert are properties that perform different logging or debugging functions when called.