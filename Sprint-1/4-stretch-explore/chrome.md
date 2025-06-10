Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
popup a small box and represent chrome//new-tab-page  says  Hello World!  with the button ok .
Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myname=prompt("what is your name ?")
console.log(myname)

What effect does calling the `prompt` function have?
popup a small box and represent chrome//new-tab-page  says  What is your name?  with an input box for typing the answer and two button ok and cancel.

What is the return value of `prompt`?
the return value of `prompt` is the text that we insert in the input box.
but if we press cancel button it returns null value.
