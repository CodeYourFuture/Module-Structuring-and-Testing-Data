Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
alert("Hello world!");


What effect does calling the `alert` function have?
Displays a pop-up alert dialog with the message "Hello world!" and an OK button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myName = prompt("What is your name?");

What effect does calling the `prompt` function have?
Displays a pop-up prompt dialog with the message "What is your name?" and a text input field, along with OK and Cancel buttons.

What is the return value of `prompt`?
If the user types something in the text input field and clicks OK, the function returns the string that was entered.
If the user clicks Cancel, the function returns null.
In either case, the return value is stored in the variable myName.