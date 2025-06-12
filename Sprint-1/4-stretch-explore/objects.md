## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
What output do you get?
// the following output showed `ƒ log() { [native code] }`

Now enter just `console` in the Console, what output do you get back?
// Output = `{debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}`

Try also entering `typeof console`
// output `Object`

Answer the following questions:

What does `console` store?
// It stores functions  like: 

console.log() – prints messages

console.error() – prints error messages       

console.warn() – prints warnings

console.info() – prints info messages

console.debug()  used for debugging


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// `console.log` is a function inside the console object for printing messages.
// `.` the dot operator used to access something inside an object.