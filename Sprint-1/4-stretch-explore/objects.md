## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?   
1. it show something like:
ƒ log() { [native code] }
This tells you that console.log is a function. Specifically, it's a built-in JavaScript function used to print messages to the console.

Now enter just `console` in the Console, what output do you get back?
2. it show something like this:
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
It shows a list of functions and properties, like log, error, warn, assert, clear, etc.
This tells you that console is a built-in object that stores useful debugging tools.

Try also entering `typeof console`
3. it show "object"
This confirms that console is an object in JavaScript.

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?




Answering the Questions:
1. What does console store?
console is a JavaScript object that contains methods (functions) used mainly for debugging.

It stores functions like:

console.log() – logs messages

And others like console.clear(), console.table(), etc.

2. What does console.log or console.assert mean?
These are method calls on the console object.

console.log means: access the log property (a function) that is stored inside the console object.

console.log() means: call that function.

console.assert() is similar but only logs when a condition is false.

3. What does the . (dot) mean in JavaScript?
The dot is the member access operator.

It means: "get the property named X from this object".

So:

console.log → get the log function from the console object.

console.log("sami") → run the log function with the argument "sami".