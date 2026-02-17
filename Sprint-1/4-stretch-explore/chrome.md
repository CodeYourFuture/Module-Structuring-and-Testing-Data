Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
alert('Hello World!');

What effect does calling the `alert` function have?
A pop up modal box appears with "Hello World!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myName = prompt("What is your name?");

What effect does calling the `prompt` function have?
It displays a modal dialog box with a text input field which can be completed.

What is the return value of `prompt`?
It is hidden, it does not display anything. The box closes.
When I do a console.log(myName); it returns Angela.

