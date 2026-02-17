## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

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
MemoryInfo {totalJSHeapSize: 11200000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 3760000000}
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
It is object

Answer the following questions:

What does `console` store?
console is an object that does not store anything but it is used to call debugging
methods such as log or assert or trace

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
it means that the console object is calling its methods log or assert using the dot "." operator

