## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
- function log() {
    [native code]
}

Now enter just `console` in the Console, what output do you get back?
- console {debug: function, error: function, log: function, info: function, warn: function, …}

Try also entering `typeof console`
- "object"

Answer the following questions:

What does `console` store?
- console is an object provided by the browser (or Node.js) that stores a set of functions used for debugging and outputting information.
It stores methods like:
log() – prints messages to the console
warn() – prints warnings
error() – prints error messages
info() – prints informational messages
assert() – prints messages when an assertion fails
and more...
In essence console stores a collection of helpful functions for developers to inspect values and debug their code.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
- It means that one is accessing a property (method) of the console object.  Console is the object
.log or .assert is a property of that object (specifically, a function)
In JavaScript, the dot (.) is called the dot operator, and it’s used to access a property or method of an object.  For example, if we take this object, 

let car = {
  color: "blue",
  drive: function() {
    console.log("vroom!");
  }
};
- then, car.color accesses the "blue" value, and
- car.drive() calls the drive function
- So when one types console.log, they're accessing the log function that's a property of the console object.