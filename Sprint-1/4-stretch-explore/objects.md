## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

ANSWERS:

When you type console.log and hit enter:
You get back the function definition for log:

ƒ log() { [native code] }

This shows that console.log is a built-in function (native code) that outputs messages to the console.

When you type just console and hit enter:
You get back an object containing many methods and properties:

Console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Expanding this reveals all the available console methods like assert, clear, count, group, table, time, trace, etc.

When you type typeof console:
You get back:

"object"

ANSWERING THE QUESTIONS:

1. What does console store?

console stores an object that contains methods (functions) for debugging and logging information to the browser's developer console. It's a built-in object provided by the browser's JavaScript environment that gives developers tools to output messages, test code, measure performance, and debug applications.

2. What does the syntax console.log or console.assert mean? In particular, what does the . mean?

The dot (.) is the property accessor or member operator in JavaScript. It's used to access properties (which can be values or functions/methods) of an object.
So:
console is an object
. means "access a property of this object"
log is a property of the console object that happens to be a function (method)
console.log together means "access the 'log' property from the 'console' object"
When we execute console.log("Hello"), we're:
Starting with the console object
Using the dot operator to access its log property (which is a function)
Calling that function with the argument "Hello"

