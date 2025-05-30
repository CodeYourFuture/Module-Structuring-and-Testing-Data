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

## Answers

- Calling the alert function with a string input of "Hello world!" triggers a pop up box in the browser window with a message that says "www.google.com says Hello world!" with an OK button in the bottom right corner that closes the pop up when clicked.

- Calling the prompt function ( prompt(); ) triggers a pop up box in the browser window with a message that says "www.google.com says" with an input field that I can type into with a Cancel and an OK button in the bottom right corner where both close the pop up when clicked.

- Calling the prompt function with a string input of "What is your name?" ( prompt("what is your name?"); ) triggers a pop up box in the browser window with a message that says "www.google.com says What is your name?" with an input field that I can type my name into, with a Cancel and an OK button in the bottom right corner where both close the pop up when clicked. When I type my name into the input and click OK I see my name is returned as a value in the console in devtools.

- By storing the result of prompt to a variable myName ( let myName = prompt("what is your name?"); ) it again triggers a pop up box in the browser window with a message that says "www.google.com says What is your name?" with an input field that I can type my name into and a Cancel and an OK button in the bottom right corner where both close the pop up when clicked. When I input my name and click OK, the pop up closes and the console shows the return response as "undefined" in the console in devtools. If I then console.log() the variable myName after declaring it, I get my name as a returned response followed by "undefined" on a new line in the console in devtools.
- I have since learned that the expression let myName = prompt("What is your name?"); returns undefined because "let" is a variable declaration (the same as "const" and "var"), and declarations don't return values in JavaScript. The return value of an input will only be shown if we console.log() the variable.
