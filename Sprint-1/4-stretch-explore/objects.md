## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

<!-- ƒ log() { [native code] } -->

Now enter just `console` in the Console, what output do you get back?

<!-- console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} -->

Try also entering `typeof console`

<!-- 'object' -->

Answer the following questions:

What does `console` store?
It is a JavaScript object with methods for showing output and debugging code, like log, warn, error, and assert.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

<!-- console.assert:  It is like if but it does not refer true or false. Just check the condition with msg.
console.log:   It shows a msg or value like print -->

<!-- after checking by ChatGPT:

console.assert() is used to check if a condition is false.
        like:
            let age = 27;
            console.assert(age >= 18, "User is not an adult!");


If the condition is false, it shows an error message in the console.
If the condition is true, it does nothing. It doesn't stop the program

It's helpful for debugging, to make sure certain things in your code are correct.
>

what does the `.` mean?

<!-- You can have access to method of that object
log and assert are methods of CONSOLE. -->
