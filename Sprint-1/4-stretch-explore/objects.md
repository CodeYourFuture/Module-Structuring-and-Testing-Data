## Objects

//In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

//Open the Chrome devtools Console, type in `console.log` and then hit enter

// What output do you get?
// ƒ (){for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l];if(e.apply(n,u),!("assert"===r&&u[0]||a)){a=!0;try{var 
// d=Di.parse(new Error).map((t=>t.toString())).splice(1),c=("assert"===…

//Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

//Try also entering `typeof console`
//Answer the following questions:
//What does `console` store?
//The console in JavaScript doesn’t store the program’s variables or data — instead, it’s an object provided by the browser (or Node.js) that contains a set of methods for 
//logging information, debugging, and interacting with the JavaScript environment.

//What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//In both cases, console is an object, and log or assert are properties (specifically, methods) of that object. The dot (.) is called the dot notation operator or member 
//access operator. It is used in JavaScript (and many other languages) to access a property or method that belongs to an object.
