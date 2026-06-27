## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
//ƒ log() { [native code] } . This is the output. The output indicates it is a function whose name is log() and which is built in
//Javascript. 

Now enter just `console` in the Console, what output do you get back?
//console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} . this is the output. In which console shows many functions it delt with such as debugging, error, info, log warn etc.

Try also entering `typeof console`
//The output is 'object'. Which means it is an object which perform many functions.

Answer the following questions:

What does `console` store?
`console` stores different methods (functions). 
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//Both are the function reference. If we further call `console.log` then the function runs and it will print output.
console.assert() function writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. `.` used to access the property of the object. In both the functions, `.` accesses `log` or `assert` property of the console object and get the values.