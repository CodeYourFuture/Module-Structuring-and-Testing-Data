Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
alert("Hello World!")

What effect does calling the `alert` function have?
1. Displays a Modal Dialog Box: chrome://new-tab-page-says
Hello World!
2. Pauses Script Execution
3. No Return Value

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myName = prompt("What is your name?");

What effect do2es calling the `prompt` function have?
1. Displays a Modal Dialog Box with an Input Field
2. Pauses Script Execution
3. Returns User Input
4. Blocks User Interaction with the Page
5. Browser-Dependent Appearance

What is the return value of `prompt`?
undefined


