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

1. The alert() function

Code:

alert("Hello world!");

Effect:

When you call alert("Hello world!") in the Chrome Console:

A modal dialog box (popup window) appears on the screen.

It displays the message:

Hello world!

The dialog has an “OK” button that you must click before continuing.

Purpose:
It’s used to display information to the user — a simple way to show messages or debugging output in the browser.

Return value:

alert() does not return any value — its return value is undefined.

2. The prompt() function

Code:

let myName = prompt("What is your name?");

Effect:

When you call this:

A popup dialog appears with:

A message: "What is your name?"

A text input box

“OK” and “Cancel” buttons.

The user can type something (e.g., Alice) and click “OK” or “Cancel”.

Return value:

If the user types something (e.g., "Alice") and clicks OK 
prompt() returns the string "Alice".

If the user clicks Cancel 
prompt() returns null.

So after running:

let myName = prompt("What is your name?");

You’ll have:

myName === "Alice" (if entered “Alice”)

myName === null (if Cancelled)

Purpose:
prompt() is used to get text input from the user through a browser dialog.

