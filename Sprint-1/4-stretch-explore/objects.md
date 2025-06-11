## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answers: 

# Exploring the Chrome DevTools Console

**Open the Chrome DevTools Console, type `console.log` and then hit Enter**  
Done.

**What output do you get?**  
I got:  
ƒ log() { [native code] }

**Now enter just `console` in the Console, what output do you get back?**  
I got:  
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

**Try also entering `typeof console`**  
I got:  
“object”

---

## What does `console` store?

`console` is a JavaScript object that provides access to the browser's debugging console.  
It stores functions such as `log`, `error`, `warn`, etc., which are used to track or print information while the code runs.

---

## What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

It means to access the `log` function that belongs to the `console` object.

---

## What does the `.` mean?

The dot (`.`) is a notation in JavaScript used to access a property or function on an object.  
So, `console.log()` means: call the `log` method that belongs to the `console` object.
