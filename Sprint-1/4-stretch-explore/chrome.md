Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Answer:
When I run alert("Hello world!") in the Chrome console, a pop-up window appears on the screen.
This pop-up shows the message Hello world! and waits for you to click OK before you can continue using the page.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

Answer:
const myName = prompt("What is your name?");

What effect does calling the `prompt` function have?

Answer:
This opens a pop-up dialog box with the question What is your name? and a text input field.
This enables the user to type the required response (your name)
The value the user enters is saved in the variable myName.

What is the return value of `prompt`?

Answer:
Clicking Cancel causes prompt to return null.
The return value of prompt is either the string the user types in or null if cancelled.
