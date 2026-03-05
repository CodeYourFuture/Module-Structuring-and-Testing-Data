## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

//log() { [native code] }Now enter just `console` in the Console, what output do you get back?console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}assert: ƒ assert()clear: ƒ clear()context: ƒ context()count: ƒ count()countReset: ƒ countReset()createTask: ƒ createTask()debug: ƒ debug()dir: ƒ dir()dirxml: ƒ dirxml()error: ƒ error()group: ƒ group()groupCollapsed: ƒ groupCollapsed()groupEnd: ƒ groupEnd()info: ƒ info()log: ƒ log()memory: MemoryInfo {totalJSHeapSize: 12700000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2330000000}profile: ƒ profile()profileEnd: ƒ profileEnd()table: ƒ table()time: ƒ time()timeEnd: ƒ timeEnd()timeLog: ƒ timeLog()timeStamp: ƒ timeStamp()trace: ƒ trace()warn: ƒ warn()length: 0name: "warn"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]Symbol(Symbol.toStringTag): "console"[[Prototype]]: Object[[Prototype]]: Object
Try also entering `typeof console`'object'
Answer the following questions:What does `console` store?the console stores objects
What does the syntax `console.log` or `console.assert` mean?
In particular, what does the `.` mean?
the . denotes what kind of object the console is being told to use and what to do with the data it has been given , the . operator called dot operator or property access operator and it is used to access properties or methods of an object.
