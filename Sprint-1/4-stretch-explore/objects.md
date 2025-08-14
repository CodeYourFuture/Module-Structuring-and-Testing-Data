## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

## Answers

1. What does `console` store?
   "Console" doesn't store values or data - it outputs information to devtools or the terminal, it essentially allows you to show messages or information useful to the developer.

2. What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
   When you use the syntax "console.log()" or "console.assert()" you are telling "console" to do something, like show a message, or check if something is true. "Console" is an object (an object is a basic data structure, which is essentially a collection of key-value pairs (like a dictionary), where the keys are strings (or Symbols), and the values can be anything — strings, numbers, arrays, functions, etc.) that has a list of features (methods) that can be used along with it. These methods are essentially functions and each one outputs different information to the browser console or terminal. The "." notation is used so you can access these additional features.

"Console" is an object that provides a set of methods to output information to the browser console or terminal. The following are methods that can be called on "console":
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
memory: MemoryInfo {totalJSHeapSize: 24500000, usedJSHeapSize: 23100000, jsHeapSizeLimit: 2330000000}
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
