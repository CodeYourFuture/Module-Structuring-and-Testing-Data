Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
a pop up box appears saying thecharitych.com says this is an alert

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
a pop up box appears saying thecharitych.com says What is your name

What is the return value of `prompt`?

Using:
const myName = prompt("What is your name?");
console.log(myName);

If I click ok without entering my name the prompt goes off the screen and console.log returns undefined

If I click cancel without entering my name the promptgoes off the screen and console.log null undefined

If I put my name Hayriye in and click ok then it goes off the screen and console.log returns Hayriye