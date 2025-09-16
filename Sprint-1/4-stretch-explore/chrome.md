Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
The alert function call a small separate window pop out, written "Hello world!". There is a OK button at the bottom right to dismiss it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
The prompt function pop out a small window similar to alert but it has a input section where I can type my name.

What is the return value of `prompt`?
The return value of prompt is a string. If we did not enter anything and pressed ok, the value is also a string.
However, if we pressed cancel, it will return null.
