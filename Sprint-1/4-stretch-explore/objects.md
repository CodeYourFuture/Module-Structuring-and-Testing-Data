## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? error undefined

Now enter just `console` in the Console, what output do you get back?console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} listing all its properties and methods.

Try also entering `typeof console` "this returns object

Answer the following questions:

What does `console` store?console store an object that provides various methods for logging information ,displaying warnings , errors,and other debugging purposes.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The syntax console.log or console.assert means that you are calling a specific method (log or assert) that belongs to the console object.The . (dot) is called the dot operator, and it is used in JavaScript to access a property or method of an object. In this case
console is the object.
log and assert are methods (functions) of the console object.
