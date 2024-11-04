## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

What does console store?
The console object itself doesn’t store information like a data structure would (e.g., an array or an object). Instead, it provides methods that you can use to interact with the console. These methods can log messages, display warnings, show errors, and provide various functionalities useful for developers during debugging.

What do console.log and console.assert mean?
console.log() - outputs a message to the web console. You can use it to display variables, strings, and other data types, making it a vital tool for debugging.

console.assert(condition, message) - This method writes an error message to the console if the specified condition is false. If the condition is true, nothing is logged.

What does the '.' mean?
In the syntax console.log and console.assert, the '.' operator is used for property access in JavaScript. The console object contains various methods (like log and assert) as its properties. The '.' operator allows you to access these properties or methods of the console object. In general:
-console is the object.
-log and assert are properties (methods) of that object.
