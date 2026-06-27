## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
function log()
length: 0
name: "log"
<prototype>: function ()

Now enter just `console` in the Console, what output do you get back?
Console { assert: assert(), clear: clear(), count: count(), countReset: countReset(), debug: debug(), error: overrideMethod(n), info: info(), log: log(), table: table(), trace: overrideMethod(n), … }
assert: function assert()
clear: function clear()
count: function count()
countReset: function countReset()
debug: function debug()
dir: function dir()
dirxml: function dirxml()
error: function overrideMethod(n)
exception: function exception()
group: function group()
groupCollapsed: function groupCollapsed()
groupEnd: function groupEnd()
info: function info()
log: function log()
profile: function profile()
profileEnd: function profileEnd()
table: function table()
time: function time()
timeEnd: function timeEnd()
timeLog: function timeLog()
timeStamp: function timeStamp()
trace: function overrideMethod(n)
warn: function overrideMethod(n)
Symbol(Symbol.toStringTag): "console"
<prototype>: Object { }
Try also entering `typeof console`

- "object"
  Answer the following questions:

What does `console` store?

- console stores an object that contains a collection of methods (functions) used for debugging and logging information to the browser's console.
  What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
- `console.log` is a method of the `console` object that logs a message to the console.
- `console.assert` is a method of the `console` object that checks if a condition is true, and if not, throws an error.
- The `.` in `console.log` and `console.assert` is a property access operator. It means that `console` is an object, and `log` and `assert` are its properties or methods.
