## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I got ƒ log() { [native code] }
Chrome is telling me console.log a built-in function.

Now enter just `console` in the Console, what output do you get back?
The output is the console object, which has many built-in methods, such as assert, clear, and context.

Try also entering `typeof console`
The type of console is an object.

Answer the following questions:

What does `console` store?
A console contains its properties, and many of its properties are built-in methods that we can call.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The syntax console.log references to the log method built-in the console object, whereas console.assert references to the assert method.
The log method can output message to the console.
The assert method can output a error message when an assertion is false.
In particular, the "." is a accessing method syntax. As a console is an object which has many built-in methods, the "." can refer to the corresponding method after the ".", such as log and assert.
