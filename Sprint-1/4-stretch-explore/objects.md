## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
    `ƒ log() { [native code] }`

Now enter just `console` in the Console, what output do you get back?

    console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
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
ƒ error()
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
MemoryInfo {totalJSHeapSize: 10600000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2330000000}
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
ƒ trace()
warn
: 
ƒ warn()
Symbol(Symbol.toStringTag)
: 
"console"
[[Prototype]]
: 
Object

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
    console stores many useful functions related to logging and debugging.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

    console.log means: access the log method inside the console object.
    console.assert means: access the assert method inside the console object.
    In other words, console is the object, and .log or .assert are functions (methods) inside that object that you can call.

    So, the . (dot) is the property access operator in JavaScript.

    It means: “access the property or method named after the dot from the object before the dot.”
    The object here is console as they of console is 'object'

