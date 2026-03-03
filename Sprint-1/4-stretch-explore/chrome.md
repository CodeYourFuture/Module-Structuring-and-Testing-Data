Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

Response:

1. Call the alert function
In the console, typing 'alert("Hello world!");'

Effect:
A small pop-up dialog box appears in the browser window with the message "Hello world!" and an OK button. The dialog is modal, so it blocks interaction with the web page until you click OK.

2. Call the prompt function typing:

let myName = prompt("What is your name?");

Effect:
Another pop-up appears, this time with the message "What is your name?", a text input field, and OK/Cancel buttons.

When typed something and press OK, the string typed is returned and stored in the variable myName.
If pressed Cancel or close the dialog without entering anything, the return value is null.

3. Check the return value
After entering a name (e.g., "Carlos") and clicking OK, you can check:

console.log(myName);
Output in the console:

Carlos

In summary:
alert() displays a message and returns nothing (undefined).
prompt() displays a message with an input field and returns either of one value:

The input string (if OK is clicked)
null (if Cancel is clicked or the dialog is closed without input)

