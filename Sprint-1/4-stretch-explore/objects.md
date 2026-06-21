## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? // I got 'console.log'
// ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
/*console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
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
countReset
: 
ƒ countReset()
createTask
: 
ƒ createTask()
debug
: 
ƒ debug()
dir
: 
ƒ dir()
dirxml
: 
ƒ dirxml()
error
: 
(...n)=> {…}
group
: 
ƒ group()
groupCollapsed
: 
ƒ groupCollapsed()
groupEnd
: 
ƒ groupEnd()
info
: 
ƒ info()
log
: 
ƒ log()
memory
: 
MemoryInfo {totalJSHeapSize: 33100000, usedJSHeapSize: 29400000, jsHeapSizeLimit: 3760000000}
profile
: 
ƒ profile()
profileEnd
: 
ƒ profileEnd()
table
: 
ƒ table()
time
: 
ƒ time()
timeEnd
: 
ƒ timeEnd()
timeLog
: 
ƒ timeLog()
timeStamp
: 
ƒ timeStamp()
trace
: 
(...n)=> {…}
warn
: 
(...n)=> {…}
Symbol(Symbol.toStringTag)
: 
"console"*/

Try also entering `typeof console`
// got: object

Answer the following questions:

What does `console` store?
/* Console is a globally available Object provided by the browser environment to store debugging tools functions in one convienient place*/
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
/*`console.log` or `console.assert` mean? i.e console.log go inside the console Object and print out whatever you have on the console to see, log() is a method which does the action on the object , and for console.assert means check whether something is true and if it's not true show the error message on the console. the '.' is called the property accessor or dot Notation and what it does is to dig inside an object and grab a specific piece of data or functionality stored within it.*/
