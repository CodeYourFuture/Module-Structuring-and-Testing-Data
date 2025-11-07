## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Step 1: Type console.log and hit Enter

What you’ll see in Chrome’s Console:

ƒ log() { [native code] }

Meaning:
This shows that console.log is a function, specifically one that’s built into the browser (that’s what “native code” means — it’s implemented in C++ within Chrome’s V8 engine, not in JavaScript itself).

Step 2: Type just console and hit Enter

What you’ll see:
An object printed in the console — something like:

Console {memory: MemoryInfo, debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...}


Meaning:

This shows that console is a built-in JavaScript object.

It contains many methods (functions) such as:

log() → prints messages

error() → prints error messages (in red)

warn() → prints warnings (in yellow)

assert(), table(), clear(), etc.

So you can think of console as a toolbox full of functions for logging and debugging.

Step 3: Type typeof console

Output:

"object"

Meaning:
This confirms that console is an object in JavaScript.

Now, answering the questions directly
What does console store?

console stores an object that provides access to a collection of built-in methods used for outputting information to the browser’s developer console.

It’s part of the Web API — the environment provided by browsers, not part of the JavaScript language itself.

What does the syntax console.log or console.assert mean?

console.log means:

Access the property named "log" inside the object named console.

console.assert means:

Access the property named "assert" inside the same object.

In both cases, the property happens to store a function — so you can call it using parentheses, like console.log("Hi!").

What does the . (dot) mean?

The dot (.) is the property access operator in JavaScript.

It’s used to access a property or method belonging to an object.

In general:

object.property

means “get the value of property that belongs to object”.

Examples:

console.log    // accesses the log function in the console object
Math.PI        // accesses the value of PI in the Math object
document.body  // accesses the body element of the web page

