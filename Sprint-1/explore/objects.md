## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
   
What output do you get?
    ---------------- ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?
    --------------- console
        console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
        methods properties built-in Js devtools which can be useful for debugging and tracking the code


Try also entering `typeof console`  
    ------------- 'object'

Answer the following questions:

What does `console` store?
    ------------ Is an object Js which contains methos and properties for logging information,    displaying errors, warnings, debugging in the browser.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
    ------------ the dot notation between `console.log` or `console.assert` is the access to method(function) store within the console object. 

    ---------- eg. With the . operator, we can access the properties in each object within the students array, allowing us to check or modify what’s stored in each object.

let students = [
  { nombre: "Ana", age: 21 },
  { nombre: "Luis", age: 22 },
  { nombre: "Marta", age: 20 }
];

console.table(students);  

