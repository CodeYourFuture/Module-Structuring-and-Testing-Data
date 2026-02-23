## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

1. I got back, 'ƒ log() { [native code] }'
which is the definition of console function. 

Now enter just `console` in the Console, what output do you get back?

2. I got back, console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Which is the definition of console as an object with several examples of functions after the object. 

Try also entering `typeof console`

3. I've got 'object', it is showing me that console itself is an object. 

Answer the following questions:

What does `console` store?

4. The object console stores different functions used for various purposes, such as debugging, showing errors etc.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

5. console.log allows you access the log property of the console object. ie log is a property stored inside the object. In this case log as a function.

console.assert - assert is another function stored inside console object, used for checking is a condition is true. 

"." means go inside this property and get the property provided. Perfect example of this is, "person" is an object, "name" is a  property and so "." allows me to access the property. 
