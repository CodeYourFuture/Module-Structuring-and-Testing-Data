## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
 VM377:1 Uncaught ReferenceError: conole is not defined
    at <anonymous>:1:1


Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
The console object is a debugging tool, not a storage mechanism.
It helps developers view and inspect what their code is doing at runtime.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console is the object
log or assert is a method (function) that belongs to that object
The dot . is the property access operator.
It is used to access a property or method that exists inside an object.