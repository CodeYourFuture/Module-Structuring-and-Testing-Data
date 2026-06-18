## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
// I get 'console.log'

What output do you get?

Now enter just `console` in the Console, what output do you get back?
// output is 'console'

Try also entering `typeof console`
// output is 'typeof console'

Answer the following questions:

What does `console` store?
// console stores functions inside it.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// console.log -- logs the function in the console object.
// console.assert -- uses the assert function in the console object where it assert or checks whether something is true or false. If it is true, it does output nothing. But if it is false, it outputs an error message.
// "." -- is a property access operator. It gets something that belongs to its object. Example, console.log --> gets the log function inside the console
Math.round --> gets the round function inside Math
