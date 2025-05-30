Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
* A popup appears saying "Hello world! As well as a confirmation "OK" buttom

What effect does calling the `alert` function have?
* It gives you an alert which will remain there until you acknowledge it by clicking ok.


Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
* * A popup appears with the question, an input field, and an ok and cancel button.

What is the return value of `prompt`?
* The return value is undefined. However, the name I added to the input is saved in the variable myName