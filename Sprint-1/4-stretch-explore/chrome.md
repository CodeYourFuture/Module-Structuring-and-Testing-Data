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

Answers:

1. The alert() function

console.alert("Hello world!");

When calling the function alert("Hello world!") in the Chrome Console.
A window popup the the message displaying "Hello world!" on the screen.
That windows has an “OK” button that needs to click before continuing.

2. The prompt() function

let myName = prompt("What is your name?");

When calling that function the window display a message "What is your name?" and after the user input a response the value is stored in the variable "myName". 

That window dialog has two buttons: “OK” and “Cancel”.
The user can type something like "Carlos" and click “OK” or “Cancel”.
If the user types something like "Carlos" and clicks OK the prompt function returns the string "Carlos".

The purpose of prompt() is to get text input from the user through a window dialog.

