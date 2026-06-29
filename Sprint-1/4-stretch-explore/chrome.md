Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Calling alert("Hello World!") displays a pop-up message box containing the text "Hello World!". The user will now have to click OK to dismiss it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
Calling prompt("What is your name?") displays a pop-up box with a text input feild. The user can type a response, and the gunction returns whatever text the user entered. If the user clicks Cancel, the return value is null.

What is the return value of `prompt`?
The return value is the text the user typed, or null if the cancelled.
