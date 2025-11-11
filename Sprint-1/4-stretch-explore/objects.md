## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

1. Answer (What does `console` store)? 

What is seen in Chrome’s Console is:

ƒ log() { [native code] }

This shows that console.log is a function, specifically a built-in function into the browser (that’s what “native code” means) 

2. Answer Step 2 (What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?)

Console {memory: MemoryInfo, debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...}

This shows that console function is a built-in JavaScript object.
As it's expect because in Javascript, function is an object type.

It contains many methods (functions) such as:

log() → prints messages

error() → prints error messages (in red)

warn() → prints warnings (in yellow)

assert(), table(), clear(), etc.

We can think of console as a tool for for logging and debugging.

3. typeof console

"object"

This confirms that console is an object in JavaScript.

Going back to the question asked "What does console store?"

It can be said console function stores an object that provides access to a collection of built-in methods and property used to displaying information to the browser’s developer console.

4. What does the syntax console.log or console.assert mean?

console.log means:

Access the property named "log" that is part of the object named console.

console.assert means:

Access the property named "assert" inside the same object.

5. What does the . (dot) mean?

The dot (.) is the method or property access operator in JavaScript.

It’s used to access a property or method that belongs to a said object.

console.log    // accesses the log property in the console object
Math.PI        // accesses the value of PI (3,1415...) in the Math object

