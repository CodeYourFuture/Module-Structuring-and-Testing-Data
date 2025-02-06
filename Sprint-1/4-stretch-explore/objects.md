## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
/*
1. When i type console.log I got f log(){[native code]} and if i type console.lof() and hit enter i got 'undefined'

2. enter just `console` in the Console,console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
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
countReset    and a lot more.

3. I Tried entering `typeof console`and got 'object' in console. 

4. What does `console` store? console in chrome dev tools stores and display logs messages, errors, warnings and outputs from java script execution.But these values not store permanently .If i refresh the page all stored variables and log disappear.

5. console.log(value) log is a method of the console objects that print output to the console. for example. console.log("Hello!"); It will print Hello!
   console.assert();
    assert is a method that checks conditions, is it false? if yes, then print error.
    (.) is used to access properties or methods of an object.
*/