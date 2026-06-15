## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
//It shows that console.log is a function console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
What output do you get?
//ƒ log() { [native code] } this is the function that shows
Now enter just `console` in the Console, what output do you get back?
//console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
//'object'
Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//stores an object that contains different functions
//refers to functions inside the console object
