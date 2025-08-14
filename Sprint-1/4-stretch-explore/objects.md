## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
//ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
// got 'object' as an output

Answer the following questions:

What does `console` store?
//console is an object that provides a collection of methods and some properties for logging information, debugging JavaScript code, inspecting objects, timing code execution, and profiling performance. The console.log(), console.info(), console.warn(), console.error(), and console.debug() methods all accept any type of value (strings, numbers, objects, etc.) and are used for general, informational, warning, error, and debug logging respectively. console.dir() accepts an object and displays its properties in a tree format, while console.table() takes an array or object and presents it in a table. console.assert() takes a boolean condition and any value, logging the value only if the condition is false. console.count() uses a string label to count how many times it has been called. console.time() and console.timeEnd() take a string label and measure time between the two calls. console.group(), console.groupCollapsed(), and console.groupEnd() use string labels to group logs. console.trace() accepts no arguments and logs the call stack. console.profile() and console.profileEnd() take string labels and record performance data.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//console.log log or display values to the console. Console.assert, check if a condition is true and in this case no output. Otherwise, an
// error message shows. As for the `,`, it's called the dot notation and it's used to access properties and methods of an object.
