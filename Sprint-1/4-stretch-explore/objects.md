## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] } this is the output that I got.

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert
: 
ƒ assert()
clear
: 
ƒ clear()
context
: 
ƒ context()
count
: 
ƒ count()
countReset
: 
ƒ countReset()
createTask
: 
ƒ createTask()
debug
: 
ƒ debug() it also shows several outputting information to the console.

Try also entering `typeof console`
I get "object" this tells us  that console is an object in JavaScript.

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
 => The console object stores various methods used for outputting information to the console, like console.log(), console.assert(), console.error(), and others. These methods allow you to display data, log errors, or perform other debugging tasks.

 => The . is used to access methods or properties of an object.