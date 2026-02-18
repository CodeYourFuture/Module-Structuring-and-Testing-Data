## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] } <-- tells me log() is a native function of Javascript

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert: ƒ assert()
clear: ƒ clear()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
createTask: ƒ createTask()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: MemoryInfo {totalJSHeapSize: 48746582, usedJSHeapSize: 43721570, jsHeapSizeLimit: 4395630592}
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
Symbol(Symbol.toStringTag): "console"
[[Prototype]]: Object <-- prints out the console object with all its properties

Try also entering `typeof console`
'object' <-- data type of console

Answer the following questions:

What does `console` store?
The console object stores a series of functions that help with debugging code.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The syntax console.log, called dot notation, is the simplest method to access the properties of an object. The "." identifies log as a property of console. Without it we would not be able to access the function, nor use it.
