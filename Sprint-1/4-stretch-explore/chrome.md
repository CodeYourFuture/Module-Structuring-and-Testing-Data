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

ANSWER:

1. alert("Hello world!");

When you type this into the console and press Enter:
A small pop-up window (dialog box) appears in the Chrome browser window.
It will show the message: "Hello world!".
Then there is an OK button to dismiss it.
The console shows undefined after the dialog is closed because alert() itself does not return a value (i.e., it returns undefined).
The alert function is used to show a simple message to the user. 
Execution of JavaScript is paused until the user clicks OK.

2. let myName = prompt("What is your name?");

When you type this and press Enter:
Another pop-up dialog appears, but this time with a text input field.
It will display the prompt message: "What is your name?".
There will be an OK button and a Cancel button.
After you type something and press OK (or just press OK without typing), the dialog closes.
If you type a name and press OK, the return value (stored in myName) is the string you entered.
If you press Cancel, the return value is null.
If you press OK without typing anything, the return value is an empty string "".

3. Checking the return value

After running prompt, type myName in the console and press Enter. It will show the value you entered (or null or "").

