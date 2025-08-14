## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 

- ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

- console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

- 'object'

Answer the following questions:

What does `console` store?

- `console` is a built-in object that provides access to the browser's debugging console - it doesn't store data like variables or arrays. However, it does contain  a number of methods/ functions such as `console.log()`, `console.error()`, `console.warn()`, `console.time()`, `console.timeEnd()` and `console.table()` which are useful tools for developers when inspecting and testing code.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

- `console.log` and `console.assert` are both function calls to methods for the built-in console:

- `console.log()`: shows messages in the console

- `console.assert()`: checks if something is true and logs an error if it’s not.

- The `.(dot)` is called the dot operator. It's used to access a property or function that belongs to an object