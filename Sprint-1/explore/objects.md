## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

f log() {[native code]}
if we want to use console.log as a function, we need to put parentheses at the end

Now enter just `console` in the Console, what output do you get back?

console { debug:f , error:f , info:f , log:f , warn:f , ...}
console is an object, if we want to get different capability from it, we need to use other properties with it as a function

Try also entering `typeof console`
object

Answer the following questions:

What does `console` store?
console is an object with different properties.  is primarily used for logging and debugging purposes
logging and debugging messages will be stored in console and then we can see them by using different properties from console. eg. if want to see the error message, we can use console.error

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
"." is used to access a specific property or method of an object.
console.assert(): (logging) shows a message based on the condition
console.log():(logging)shows whatever inside the ()

