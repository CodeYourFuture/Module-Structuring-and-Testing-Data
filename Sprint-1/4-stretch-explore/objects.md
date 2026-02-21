## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

line 7 =ƒ log() { [native code] }

line 9 = console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

line 11 = 'object'


line 15 =console is like an object that helps to store methods used for debugging and printing output in the browser’s developer tools.


 line 16 = 'console.log'means access or get the log function fom the object console. 
           'console.assert' means access or get the assert function from the object console.
           while the '.' is an access operator that access methods or properties from and object.
