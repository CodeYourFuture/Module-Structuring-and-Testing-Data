## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

When you typed console.log in the Console and hit Enter, shows something like:

ƒ log() { [native code] }
This shows that console.log is a function (indicated by the ƒ symbol) that's built into the browser (hence "[native code]").

Now enter just `console` in the Console, what output do you get back?

When typed console in the Console, it displays an object that looks something like:

Console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
This shows that console is an object containing many methods.

Try also entering `typeof console`

Typing typeof console returns:

"object"
This confirms that console is an object data type.

console stores a collection of methods and properties used for debugging and logging information in the browser. It's a built-in object that provides access to the browser's debugging console. It contains methods like:

log() - for general output

error() - for error messages

warn() - for warnings

info() - for informational messages

assert() - for conditional logging

table() - for displaying tabular data

clear() - for clearing the console

And many more

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The dot (.) is the member access operator (also called the property accessor) in JavaScript.

When it shows console.log:

console is the object

. means "access a property of this object"

log is a property of the console object (specifically a method, which is a function stored as a property)

So console.log means "access the log property of the console object." Since log is a function, we can then call it with parentheses: console.log("Hello").
This dot notation is how JavaScript allows objects to contain related data and functionality, organizing code into logical groups.

