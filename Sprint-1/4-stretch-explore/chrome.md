Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`; it displays hello world in a alert box

What effect does calling the `alert` function have? the alert function forces browser to display a message or a warning.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
Prompt("what is your name?"), it pops-up a dialog box where I enter my name.
I saved my name in a variable myName and I called the prompt function, it gives my name.
What effect does calling the `prompt` function have? by prompt you can write/give your input or user can cancel it
What is the return value of `prompt`? name user have input or null in case of cancel.
